import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueDetailPage } from './queue-detail.page';

describe('QueueDetailPage', () => {
  let component: QueueDetailPage;
  let fixture: ComponentFixture<QueueDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
