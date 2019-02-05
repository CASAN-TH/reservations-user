import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOpenimagePage } from './modal-openimage.page';

describe('ModalOpenimagePage', () => {
  let component: ModalOpenimagePage;
  let fixture: ComponentFixture<ModalOpenimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOpenimagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOpenimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
