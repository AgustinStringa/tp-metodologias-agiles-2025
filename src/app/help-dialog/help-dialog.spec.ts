import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDialog } from './help-dialog';

describe('HelpDialog', () => {
  let component: HelpDialog;
  let fixture: ComponentFixture<HelpDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
