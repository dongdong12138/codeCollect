<template>
    <div class="tigerGame">
        <div class="box">
            <div class="groups animation-ease" v-for="k in 3" @webkitTransitionEnd="endGame(k)">
                <ul class="group-item" v-for="i in (round+1)">
                    <li class="prize-item" v-for="item in prizes">{{item}}</li>
                </ul>
            </div>
        </div>

        <!-- <div @click="startClick">{{disClick?'抽奖中...':'点击开始'}}</div> -->
        <div class="bruce flex-ct-x">
            <button @click="startClick" class="stereo-btn"><span>Go</span></button>
        </div>

        <div class="chance">
            剩余次数：
            <span>{{chance}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chance: 20,
            round: 6, //转几回合后停下来
            prizes: [  // 放置奖品的数组，奖品个数可以控制概率
                "A",
                "A",
                "A",
                "A",
                "A",
                "B",
                "B",
                "B",
                "B",
                "B",
                "C",
                "C",
                "C",
                "C",
                "D",
                "D",
                "D",
                "E",
                "E",
                "F"
            ],
            disClick: false, //防止多次点击
            itemHeight: 0, //每个奖品的高度
            prize_id: "" //中奖id
        };
    },
    created() {
        // 打乱数组中奖品
        this.getArrRandomly(this.prizes);
    },
    mounted() {
        this.itemHeight = $(".prize-item").outerHeight();
        $(".groups").css(
            "height",
            this.itemHeight * this.prizes.length * (this.round + 1)
        );
    },
    methods: {
        startClick() {
            //开始抽奖
            if (this.disClick) {
                return;
            }
            // 判断抽奖次数
            if (this.chance === 0) {
                alert("您的抽奖次数已用完！");
                return;
            }
            //获取中奖的id
            let index = parseInt(Math.random() * this.prizes.length);
            this.prizd_id = this.prizes[index];
            console.log("this.prize_id", this.prizd_id);
            this.runGame(index);
        },
        // 随机打乱数组
        getArrRandomly(arr) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                var randomIndex = Math.floor(Math.random() * (len - i));
                var itemAtIndex = arr[randomIndex];
                arr[randomIndex] = arr[i];
                arr[i] = itemAtIndex;
            }
            this.prizes = arr;
        },
        runGame(index) {
            //启动抽奖
            this.disClick = true;
            this.resetGame();
            var itemHeight = this.itemHeight;
            var groupsHeight = this.round * $(".group-item").height();
            $(".groups").each(function(e) {
                var pos = index * itemHeight + groupsHeight;
                setTimeout(() => {
                    $(this)
                        .addClass("animation-ease")
                        .css("transform", "translate3d(0, -" + pos + "px, 0)");
                }, e * 300);
            });
        },
        endGame(k) {
            if (k == 3) {
                alert("恭喜您中了" + this.prizd_id);
                this.disClick = false;
                this.chance--;
            }
        },
        resetGame() {
            //重置状态
            $(".groups")
                .removeClass("animation-ease")
                .css("transform", "");
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.tigerGame {
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
}

.box {
    width: 300px;
    height: 100px;
    overflow: hidden;
    background: #fff;
}
.animation-ease {
    transition-property: transform;
    transition-duration: 3s;
    transition-timing-function: ease;
}
.groups {
    float: left;
    width: 100px;
    text-align: center;
}
.prize-item {
    width: 100px;
    height: 100px;
    font-size: 50px;
    border: 1px solid red;
    list-style: none;
}

.stereo-btn {
    margin-left: 30px;
    padding: 20px 40px;
    outline: none;
    border: none;
    background-image: linear-gradient(#09f, #3c9);
    box-shadow: 0 10px 0 #09f;
    cursor: pointer;
    text-shadow: 0 5px 5px #ccc;
    font-size: 30px;
    color: #fff;
    transition: all 300ms;
    border-radius: 50%;
}
.stereo-btn:active {
    box-shadow: 0 5px 0 #09f;
    transform: translate3d(0, 5px, 0);
}
</style>