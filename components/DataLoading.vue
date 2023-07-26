<template>
    <!-- loading -->
    <div class="loading" v-if="pageLoading">
        <div class="loading__bg"></div>
        <!-- <img class="loading__img" :src="getCurentImgPath('loading.svg')" /> -->
        <div class="spinner-outer">
            <svg class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$offset: 220;
$duration: 1.4s;

.spinner-outer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.spinner {
    width: 65px;
    height: 65px;
    animation: rotator $duration linear infinite;

    @include mobm-width() {
        width: 40px;
        height: 40px;
    }
}

@keyframes rotator {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
}

.path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash $duration ease-in-out infinite;
    stroke: #f9e693;
    stroke-width: 4px;
}

.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    &__bg {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.2;
    }
    &__img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

// @keyframes colors {
//   0% {
//     stroke: #000;
//   }
//   100% {
//     stroke: #000;
//   }
// }

@keyframes dash {
    0% {
        stroke-dashoffset: $offset;
    }
    50% {
        stroke-dashoffset: math.div($offset, 4);
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: $offset;
        transform: rotate(450deg);
    }
}
</style>
