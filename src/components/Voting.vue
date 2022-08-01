<script >
import ArrowUp from "../assets/ArrowUp.vue";

export default {
    components: { ArrowUp },
    computed: {
        getGroups() {
            console.log(this.$store.state.groups);
            return this.$store.state.groups;
        },
        getGroupVoteCount(groupId) {
            console.log(groupId);
            return this.$store.getters["voteCounts"];
        },



    },
    methods: {

        /**
         * Method to switch group state
         * @param {*} groupId 
         */
        toggleSelection: function (groupId) {
            this.$store.commit('switchGroupState', groupId)
        },

        /**
         * Adds an upvote to the given group
         * @param {*} groupId 
         */
        addUpvote: function (groupId) {
            console.log('test');
            this.$store.dispatch('addUpvoteMutation', groupId)

        },

        /**
         * Used to get the color of the vote
         * @param {*} groupId 
         */
        getVoteColor(groupId) {
            let groupSelected = this.getGroups.find(g => g.id === groupId).groupSelected;
            return (groupSelected) ? "#253CF2" : "#343A40";
        },

        /**
         * Used to get the background color of the vote
         * @param {*} groupId 
         */
        getVoteBackground(groupId) {
            let groupSelected = this.getGroups.find(g => g.id === groupId).groupSelected;
            return (groupSelected) ? "#E5E8FD" : "#F4F6F8";
        }




    }
}

</script>

<template>

    <div v-for="givenGroup in getGroups" :key="givenGroup" class="voting-container" v-cloak>

        <div class="votes">
            <div v-for="vote in getGroupVoteCount(givenGroup.id)" @click="toggleSelection(givenGroup.id)"
                class="eachVoteContainer" :style="{ 'background-color': getVoteBackground(givenGroup.id) }">
                <ArrowUp :color="getVoteColor(givenGroup.id)"></ArrowUp>
            </div>
        </div>

        <div @click="addUpvote(givenGroup.id)" class="voting-icon">
            <img src="../assets/add-filled.svg" alt="Add upvote icon" />
        </div>

    </div>

</template>

<style scoped>
.voting-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.voting-container .votes {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid gray;
    border-radius: 10px;
    width: 40vw;
    margin: 20px;
    min-height: 54px;
    max-height: 108px;
    overflow: scroll;
}

.voting-container .voting-icon {
    display: flex;
    border: 1px solid grey;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    background-color: #F4F6F8;
    fill: #343A40;
    cursor: pointer;
}

.voting-container .eachVoteContainer {
    width: 40px;
    height: 40px;
    display: flex;
    border: 1px solid grey;
    margin-left: 8px;
    margin-top: 8px;
    border-radius: 8px;
    cursor: pointer;
}
</style>