import {Component, computed, effect, output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import {debounceTime, distinctUntilChanged} from 'rxjs';
import {IconComponent} from '../../../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-search',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  imports: [
    ReactiveFormsModule,
    IconComponent
  ]
})
export class SearchInputComponent {
  searchControl = new FormControl('');
  searchChange = output<string>();

  constructor() {
    effect(() => {
      this.searchChange.emit(this.searchValue() ?? '');
    });
  }

  searchValue = toSignal(
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ),
    { initialValue: '' }
  );
}
