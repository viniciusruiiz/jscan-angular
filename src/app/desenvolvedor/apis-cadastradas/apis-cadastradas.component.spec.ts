import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApisCadastradasComponent } from './apis-cadastradas.component';

describe('ApisCadastradasComponent', () => {
  let component: ApisCadastradasComponent;
  let fixture: ComponentFixture<ApisCadastradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApisCadastradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisCadastradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
