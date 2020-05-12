import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from './components/deck/card/card.component';
import {DragNDropComponent} from './components/drag-n-drop/drag-n-drop.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {DeckCreateComponent} from './components/deck/deck-create/deck-create.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MbscModule} from '@mobiscroll/angular-lite';
import {MatGridListModule} from '@angular/material/grid-list';
import {DeckDetailsComponent} from './components/deck/deck-details/deck-details.component';
import {CardListComponent} from './components/deck/card-list/card-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { WordDescriptionComponent } from './components/deck/card/word-description/word-description.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    DragNDropComponent,
    NavBarComponent,
    PageNotFoundComponent,
    DeckCreateComponent,
    DeckDetailsComponent,
    WordDescriptionComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    NgbModule,
    MbscModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WordDescriptionComponent]
})
export class AppModule {
}
