<template>
    <div class="gui-h5-viewer" :style="style">
        <swiper :options="swiperOption" class="swiper-box">
            <!-- slides -->
            <swiper-slide v-for="(page,i) in pages" :key="i">
                <gui-h5-page :editable="false" v-model="pages[i]" :width="width" :height="height" ref="page"></gui-h5-page>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="next-page"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        props: {
            value: Object
        },
        components: {
            swiper,
            swiperSlide
        },
        data() {

            const context = this;
            return {
                swiperOption: {
                    direction: 'vertical',
                    slidesPerView: 1,
                    spaceBetween: 0,
                    mousewheel: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    on: {
                        transitionEnd: function(evt) {
                            console.log(evt);
                            var index =this.activeIndex;
                            context.playAnimation(index);
                        },
                    },
                }
            }
        },
        computed: {
            pages() {
                const model = this.getModel();
                return model.pages || [];
            },
            width() {
                const model = this.getModel();
                return model.width || 320;
            },
            height() {
                const model = this.getModel();
                return model.height || 640;
            },
            style() {
                return {
                    width: this.width + 'px',
                    height: this.height + 'px',
                }
            }
        },
        methods: {
            getModel() {
                return this.value || {};
            },
            playAnimation(i){
                const page=this.$refs.page[i];
                if(page) page.playAnimate();
            }
        }
    }
</script>
<style>
    .gui-h5-viewer {
        overflow: hidden;
        position: relative;
        outline: 1px solid #ccc;
    }
    .gui-h5-viewer .next-page {
        position: absolute;
        bottom: 0px;
        width: 100%;
        text-align: center;
        color: #fff;
    }
    .swiper-box {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .swiper-item {
        height: 100%;
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
