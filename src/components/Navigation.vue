<template>
    <div class="navigation">
        <div  v-for="m in menu" v-bind:key="m.name">
            <router-link class="navi-link" :to="m.to">{{m.name.toLowerCase()}}</router-link>
        </div>
        <img v-if="showImage" src="http://www.barossaunited.com.au/images/BUFCShield_CMYK_FB-01.png" height="300px" />
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
        showImage: Boolean
    },
    data() {
        return {
            menu: [
                {
                    to: "/",
                    name: "Home"
                },
                {
                    to: "/presidents-welcome",
                    name: "Presidents Welcome"
                },
                {
                    to: "/fees-registration",
                    name: "Fees & Registration"
                },
                {
                    to: "/player-info",
                    name: "Player Info"
                },
                {
                    to: "/history",
                    name: "History"
                },
                {
                    to: "/policies",
                    name: "Policies"
                },
                {
                    to: "/newsletters",
                    name: "Newsletters"
                },
                {
                    to: "/contact",
                    name: "Contact"
                }
            ]            
        }

    }
}
</script>

<style scoped>
img {
    margin: 50px 0px 0px 100px;
}
.navigation {
    margin-top: 50px;
    float: left;
    width: 30%;
}
.navi-link {
    text-decoration: none;
    margin-left: 100px;
    margin-top: 20px;
    font-size: 1.8em;
}

</style>