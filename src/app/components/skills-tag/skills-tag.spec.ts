import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTag } from './skills-tag';

describe('SkillsTag', () => {
  let component: SkillsTag;
  let fixture: ComponentFixture<SkillsTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
