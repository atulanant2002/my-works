import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDynamicComponent } from './tables-dynamic.component';

describe('TablesDynamicComponent', () => {
  let component: TablesDynamicComponent;
  let fixture: ComponentFixture<TablesDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
