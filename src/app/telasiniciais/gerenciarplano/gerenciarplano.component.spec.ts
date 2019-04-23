import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarplanoComponent } from './gerenciarplano.component';

describe('GerenciarplanoComponent', () => {
  let component: GerenciarplanoComponent;
  let fixture: ComponentFixture<GerenciarplanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarplanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarplanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
