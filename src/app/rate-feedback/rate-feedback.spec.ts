import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateFeedback } from './rate-feedback';

describe('RateFeedback', () => {
  let component: RateFeedback;
  let fixture: ComponentFixture<RateFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateFeedback],
    }).compileComponents();

    fixture = TestBed.createComponent(RateFeedback);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
