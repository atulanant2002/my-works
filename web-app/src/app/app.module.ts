import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { Chartjs2Component } from './chartjs2/chartjs2.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CroppedComponent } from './cropped/cropped.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { EchartsComponent } from './echarts/echarts.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { GeneralElementsComponent } from './general-elements/general-elements.component';
import { GlyphiconsComponent } from './glyphicons/glyphicons.component';
import { IconsComponent } from './icons/icons.component';
import { InboxComponent } from './inbox/inbox.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { Level2Component } from './level2/level2.component';
import { LoginComponent } from './login/login.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';
import { MorisjsComponent } from './morisjs/morisjs.component';
import { OtherChartsComponent } from './other-charts/other-charts.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { PlainPageComponent } from './plain-page/plain-page.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectComponent } from './project/project.component';
import { TablesComponent } from './tables/tables.component';
import { TablesDynamicComponent } from './tables-dynamic/tables-dynamic.component';
import { TypographyComponent } from './typography/typography.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CalendarComponent,
    ChartjsComponent,
    Chartjs2Component,
    ContactsComponent,
    CroppedComponent,
    ECommerceComponent,
    EchartsComponent,
    FooterComponent,
    FormComponent,
    FormAdvancedComponent,
    FormButtonsComponent,
    FormUploadComponent,
    FormValidationComponent,
    FormWizardsComponent,
    GeneralElementsComponent,
    GlyphiconsComponent,
    IconsComponent,
    InboxComponent,
    InvoiceComponent,
    Level2Component,
    LoginComponent,
    MediaGalleryComponent,
    MorisjsComponent,
    OtherChartsComponent,
    Page403Component,
    Page404Component,
    Page500Component,
    PlainPageComponent,
    PricingTablesComponent,
    ProfileComponent,
    ProjectDetailsComponent,
    ProjectComponent,
    TablesComponent,
    TablesDynamicComponent,
    TypographyComponent,
    WidgetsComponent,
    TopnavbarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
