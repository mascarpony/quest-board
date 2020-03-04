import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have two toolbar rows', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    expect(de.queryAll(By.css('mat-toolbar-row')).length).toBe(2);
  });

  it('first toolbar should contain "Welcome to the Quest Board!" text', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    expect(de.query(By.css('mat-toolbar-row')).nativeElement.textContent).toBe('Welcome to the Quest Board!');
  });
});
