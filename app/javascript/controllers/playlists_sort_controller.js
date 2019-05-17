import Rails from 'rails-ujs'
import Sortable from 'sortablejs'
import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['sortable']

  initialize() {
    this.sortable = new Sortable(this.sortableTarget, {
      onEnd: () => this.maybePostToSort(),
    })
    this.currentParams = this.paramsFromSortables()
  }

  paramsFromSortables() {
    // return `track[]=${this.sortable.toArray().join('&track[]=')}`
  }

  // only fire when order changed
  maybePostToSort() {
    const newParams = this.paramsFromSortables()
    if (newParams !== this.currentParams) {
      this.currentParams = newParams
      this.sort()
    }
  }

  sort() {
    Rails.ajax({
      // url: this.sortUrl,
      // type: 'POST',
      // data: this.currentParams,
      // success: this.displaySuccess.bind(this),
    })
  }

  displaySuccess() {
    // this.feedbackTarget.innerHTML = '<div class="ajax_success">Saved!</div>'
    alert("success!");
  }
}
