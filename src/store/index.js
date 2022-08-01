import { createStore } from 'vuex';

export default createStore({

    state: {
        /**
         * Initiating with three groups of voting with zero vote counts
         */
        groups: [
            { id: 1, groupSelected: false, voteCount: 0 },
            { id: 2, groupSelected: false, voteCount: 0 },
            { id: 3, groupSelected: false, voteCount: 0 },
        ]

    },

    /**
     * Contains methods to get the required state
     */
    getters: {
        /**
         * Used to get the number of votes in a given group
         * @param {*} state 
         * @returns 
         */
        voteCounts: (state) => (groupId) => {
            console.log(groupId);
            return state.groups.find(g => g.id == groupId).voteCount
        },

        /**
         * Used to check if a given group is of selected state
         * @param {*} state 
         * @returns 
         */
        isGroupSelected: (state) => (groupId) => {
            console.log(groupId);
            return state.groups.find(g => g.id = groupId).groupSelected
        }
    },

    /**
     * Contains methods to make changes to the state
     */
    mutations: {

        /**
         * Used to change the state of the vote count for a given group
         * @param {*} state 
         * @param {*} groupId 
         */
        addUpvote(state, groupId) {
            console.log('added here')
            state.groups.forEach(g => {
                if (g.id === groupId) {
                    g.voteCount += 1;
                }
            })
        },

        /**
         * Used to change the state of the given vote as selected or not selected
         * @param {*} state 
         * @param {*} groupId 
         */
        switchGroupState(state, groupId) {

            state.groups.forEach(g => {
                if (g.id === groupId) {
                    g.groupSelected = !g.groupSelected;
                }
            })
        }
    },

    /**
     * Contains methods to commit changes made
     */
    actions: {
        addUpvoteMutation(givenMutation, payload) {
            console.log('added here')
            givenMutation.commit("addUpvote", payload)
        },
        switchGroupStateMutation(givenMutation, payload) {
            givenMutation.commit("switchGroupState", payload);
        }
    }
})