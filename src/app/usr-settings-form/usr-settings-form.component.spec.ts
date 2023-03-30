import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrSettingsFormComponent } from './usr-settings-form.component';

describe('UsrSettingsFormComponent', () => {
  let component: UsrSettingsFormComponent;
  let fixture: ComponentFixture<UsrSettingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrSettingsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsrSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
