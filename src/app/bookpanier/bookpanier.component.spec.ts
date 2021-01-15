import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpanierComponent } from './bookpanier.component';

describe('BookpanierComponent', () => {
  let component: BookpanierComponent;
  let fixture: ComponentFixture<BookpanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookpanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
