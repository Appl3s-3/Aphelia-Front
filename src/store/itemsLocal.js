import { defineStore } from 'pinia'

export const itemsLocal = defineStore('itemsLocal', {
    state: () => {
        return {
            showFilters: false,
            showManageMenu: false,
            searchParams: "",
        }
    },
    getters: {
        filter_state() {return this.showFilters},
        manage_state() {return this.showManageMenu},
        search_params() {return this.searchParams}
    },
    actions: {
        toggle_manage() {this.showManageMenu = !this.showManageMenu},
        // show_manage() {this.showManageMenu = true},
        hide_manage() {this.showManageMenu = false},
        toggle_filters() {this.showFilters = !this.showFilters},
        set_search(params) {this.searchParams = params},
        // show_filters() {this.showFilters = true},
        // hide_filters() {this.showFilters = false}
    }
})