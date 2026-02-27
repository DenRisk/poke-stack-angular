import {Component, computed, input, output} from '@angular/core';
import {cn} from '../../utils/cn';
import {PaginationItem} from './pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  // inputs
  totalItems = input.required<number>();
  itemsPerPage = input.required<number>();
  currentPage = input.required<number>();

  // outputs
  pageChange = output<number>();


  visibleItems = computed<PaginationItem[]>(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const delta = 1;

    const items: PaginationItem[] = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        items.push({type: 'page', value: i});
      }
      return items;
    }

    const rangeStart = Math.max(2, current - delta);
    const rangeEnd = Math.min(total - 1, current + delta);

    items.push({type: 'page', value: 1});

    if (rangeStart > 2) {
      items.push({type: 'ellipsis'});
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      items.push({type: 'page', value: i});
    }

    if (rangeEnd < total - 1) {
      items.push({type: 'ellipsis'});
    }

    items.push({type: 'page', value: total});

    return items;
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
