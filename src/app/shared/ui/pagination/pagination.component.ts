import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html'
})
export class PaginationComponent {
  totalItems = input.required<number>();
  itemsPerPage = input.required<number>();
  currentPage = input.required<number>();

  pageChange = output<number>();

  totalPages = computed(() =>
    Math.ceil(this.totalItems() / this.itemsPerPage())
  );

  next() {
    if (this.currentPage() < this.totalPages()) {
      this.pageChange.emit(this.currentPage() + 1);
    }
  }

  previous() {
    if (this.currentPage() > 1) {
      this.pageChange.emit(this.currentPage() - 1);
    }
  }
}
