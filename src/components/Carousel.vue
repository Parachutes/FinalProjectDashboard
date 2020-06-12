<template>
    <div>
        <b-carousel
                :interval="3000"
                @sliding-end="onSlideEnd"
                @sliding-start="onSlideStart"
                controls
                id="carousel-1"
                img-height="480"
                img-width="1024"
                indicators
                v-model="slide"
        >

            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            alt="image slot"
                            class="d-block img-fluid w-100"
                            height="480"
                            src="../assets/website_00.jpg"
                            width="1024"
                    >
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            alt="image slot"
                            class="d-block img-fluid w-100"
                            height="480"
                            src="../assets/website_01.jpg"
                            width="1024"
                    >
                </template>
            </b-carousel-slide>

        </b-carousel>

    </div>
</template>

<script>
    export default {
        name: "Carousel",
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            // onSlideStart(slide) {
            //     this.sliding = true
            // },
            // onSlideEnd(slide) {
            //     this.sliding = false
            // }
        }
    }

</script>

<style scoped>

</style>