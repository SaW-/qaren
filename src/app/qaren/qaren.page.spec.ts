import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QarenPage } from './qaren.page';

describe('QarenPage', () => {
  let component: QarenPage;
  let fixture: ComponentFixture<QarenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QarenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QarenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
