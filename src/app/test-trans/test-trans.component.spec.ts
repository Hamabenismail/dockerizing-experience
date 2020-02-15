import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTransComponent } from './test-trans.component';

describe('TestTransComponent', () => {
  let component: TestTransComponent;
  let fixture: ComponentFixture<TestTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
