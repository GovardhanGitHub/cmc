import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistedListComponent } from './registed-list.component';

describe('RegistedListComponent', () => {
  let component: RegistedListComponent;
  let fixture: ComponentFixture<RegistedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
