import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAndPartnersImageComponent } from './team-and-partners-image.component';

describe('TeamAndPartnersImageComponent', () => {
  let component: TeamAndPartnersImageComponent;
  let fixture: ComponentFixture<TeamAndPartnersImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamAndPartnersImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamAndPartnersImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
