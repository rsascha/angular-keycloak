import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloResponseComponent } from './hello-response.component';
import { Store, StoreModule } from '@ngrx/store';

describe('HelloResponseComponent', () => {
    let component: HelloResponseComponent;
    let fixture: ComponentFixture<HelloResponseComponent>;
    let store: Store;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            declarations: [HelloResponseComponent],
        });

        await TestBed.compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HelloResponseComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(Store);

        spyOn(store, 'dispatch').and.callThrough();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
