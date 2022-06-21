import { defineStore } from 'pinia'

export const itemsLocal = defineStore('itemsLocal', {
    state: () => {
        return {
            showFilters: false,
            showManageMenu: false
        }
    },
    getters: {
        filter_state() {return this.showFilters},
        manage_state() {return this.showManageMenu}
    },
    actions: {
        toggle_manage() {this.showManageMenu = !this.showManageMenu},
        // show_manage() {this.showManageMenu = true},
        hide_manage() {this.showManageMenu = false},
        toggle_filters() {this.showFilters = !this.showFilters}
        // show_filters() {this.showFilters = true},
        // hide_filters() {this.showFilters = false}
    }
})