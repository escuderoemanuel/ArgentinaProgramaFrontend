import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerUnoComponent } from './banner-uno.component';

describe('BannerUnoComponent', () => {
  let component: BannerUnoComponent;
  let fixture: ComponentFixture<BannerUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
