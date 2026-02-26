import { Component, computed, input, output } from '@angular/core';
import {cn} from '../../utils/cn';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
})
export class PaginationComponent {
  // inputs
  totalItems = input.required<number>();
  itemsPerPage = input.required<number>();
  currentPage = input.required<number>();

  // outputs
  pageChange = output<number>();

  // computed
  visiblePages = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();

    const delta = 2;
    const start = Math.max(1, current - delta);
    const end = Math.min(total, current + delta);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });


  totalPages = computed(() =>
    Math.ceil(this.totalItems() / this.itemsPerPage())
  );

  // methods
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

  // classes
  dynamicButtonClasses(page: number) {
    return cn(
      'px-3 py-2 leading-none rounded-lg',
      page === this.currentPage()
        ? 'bg-control-bg-active text-typo-primary'
        : 'bg-control-bg hover:bg-control-bg-hover'
    );
  }
}
