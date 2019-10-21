import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyTermComponent } from './empty-term.component';
import { AnyARecord } from 'dns';
import { OnInit } from '@angular/core';


describe('EmptyTermComponent', () => {
  let component: EmptyTermComponent;
  let fixture: ComponentFixture<EmptyTermComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
