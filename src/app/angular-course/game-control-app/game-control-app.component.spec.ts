import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlAppComponent } from './game-control-app.component';

describe('GameControlAppComponent', () => {
  let component: GameControlAppComponent;
  let fixture: ComponentFixture<GameControlAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameControlAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
