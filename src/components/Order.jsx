import React from "react";
import Navbar from "./navbar";
import "./style/order.css";

const Order = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <label className="name">Street and number *</label>
                <input type="text" class="text " name="billing_address_1" id="billing_address_1" placeholder="Street name, number, etc." wtx-context="" />
                <br />

                <input type="text" class="itext " name="billing_address_2" id="billing_address_2" placeholder="Apartment, complex, unit, etc.  (optional)" autocomplete="address-line2" />
                <br />

                <label className="city">City *</label>
                <input type="text" class="text " name="billing_city" id="billing_city" placeholder="city" autocomplete="address-level2" />
                <br />

                <label className="telephone">Telephone *</label>
                <input type="number" placeholder="number" />
                <br />

                <label className="email (order and novice notification)">Email address *</label>
                <input type="email" class="text " name="billing_email" id="billing_email" placeholder="Email (order and invoice notifications)" autocomplete="email username" wtx-context=""></input>

            </div>
            <div className="order"> Your Order</div>
            <thead>
                <tr class="cart_item">
                    <th class="product-name">Product</th>
                </tr>
                <tr class="woocommerce-shipping">
                    <font>Delivery</font>
                </tr>
                <tr class="order-total">
                    <th><font class="sum">Total</font></th>
                    <td>
                        <strong>
                            <span class="woocommerce-Price-amount">
                                <span class="woocommerce-Price-currencySymbol">RON</span>
                            </span>
                        </strong>
                    </td>
                </tr>
            </thead>
            <div className="e-deliverydate">
                <font class="">Estimated delivery date of the order to the courier&nbsp; </font>
                <div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all notranslate" role="application" aria-label="Delivery date Datepicker"></div>
            </div>
            <input type="text" class="input-text" name="e_deliverydate" id="" placeholder="Choose a date" readonly="readonly" autocomplete="date" wtx-context="421CA785-5EA4-4239-A5DD-5449591421F7" />

            <div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all notranslate" role="application" aria-label="Delivery date Datepicker">
                <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                    <a class="ui-datepicker-prev ui-corner-all ui-state-disabled" href="javascript:void(0)" role="button">
                        <span class="ui-icon ui-icon-circle-triangle-w">Previous Month, Martie 2023</span>
                    </a>
                    <a class="ui-datepicker-next ui-corner-all ui-state-disabled" href="javascript:void(0)" role="button">
                        <span class="ui-icon ui-icon-circle-triangle-e">Next Month, Mai 2023</span>
                    </a>
                    <div class="ui-datepicker-title">
                        <span class="ui-datepicker-month">Aprilie</span>&nbsp;
                        <span class="ui-datepicker-year">2023</span>
                    </div>
                </div>
                <table class="ui-datepicker-calendar">
                    <thead>
                        <tr>
                            <th scope="col">
                                <span title="Luni">Lu</span></th>
                            <th scope="col">
                                <span title="Marţi">Ma</span></th>
                            <th scope="col">
                                <span title="Miercuri">Mi</span></th>
                            <th scope="col">
                                <span title="Joi">Jo</span></th>
                            <th scope="col">
                                <span title="Vineri">Vi</span></th>
                            <th scope="col" class="ui-datepicker-week-end">
                                <span title="Sâmbătă">Sâ</span></th>
                            <th scope="col" class="ui-datepicker-week-end">
                                <span title="Duminică">Du</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                            <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                            <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                            <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                            <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">1</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">2</span></td>
                        </tr>
                        <tr>
                            <td class=" partially-booked available-deliveries ui-datepicker-current-day" title="Available" data-handler="selectDay" data-event="click" data-month="3" data-year="2023">
                                <a class="ui-state-default ui-state-active" href="#" aria-current="true" data-date="3" role="button" aria-label="3 Aprilie 2023 Luni">3</a>
                            </td>
                            <td class=" available-deliveries" title="Available" data-handler="selectDay" data-event="click" data-month="3" data-year="2023">
                                <a class="ui-state-default" href="#" aria-current="false" data-date="4" role="button" aria-label="4 Aprilie 2023 Marţi">4</a>
                            </td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">5</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">6</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">7</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">8</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">9</span></td>
                        </tr>
                        <tr>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">10</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">11</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">12</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">13</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">14</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">15</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">16</span></td>
                        </tr>
                        <tr>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">17</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">18</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">19</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">20</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">21</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">22</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">23</span>
                            </td>
                        </tr>


                        <tr>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">24</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">25</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">26</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">27</span></td>
                            <td class=" ui-datepicker-unselectable ui-state-disabled available-deliveries" title="Available">
                                <span class="ui-state-default">28</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">29</span></td>
                            <td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
                                <span class="ui-state-default">30</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                    <a class="ui-datepicker-prev ui-corner-all ui-state-disabled" href="javascript:void(0)" role="button">
                        <span class="ui-icon ui-icon-circle-triangle-w">Previous Month, Martie 2023</span>
                    </a>
                    <a class="ui-datepicker-next ui-corner-all ui-state-disabled" href="javascript:void(0)" role="button"><span class="ui-icon ui-icon-circle-triangle-e">Next Month, Mai 2023</span></a>
                    <div class="ui-datepicker-title"><span class="ui-datepicker-month">Aprilie</span>&nbsp;
                        <span class="ui-datepicker-year">2023</span>
                    </div>
                </div>

                <a class="ui-datepicker-prev ui-corner-all ui-state-disabled" href="javascript:void(0)" role="button"><span class="ui-icon ui-icon-circle-triangle-w">Previous Month, Martie 2023</span></a>

                <a class="ui-datepicker-next ui-corner-all ui-state-disabled" href="javascript:void(0)" role="button"><span class="ui-icon ui-icon-circle-triangle-e">Next Month, Mai 2023</span></a>

                <div class="ui-datepicker-buttonpane ui-widget-content">
                    <button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">Clear</button>
                </div>
            </div>

            <div class="ui-datepicker-title">
                <span class="ui-datepicker-month">Aprilie</span>&nbsp;
                <span class="ui-datepicker-year">2023</span>
            </div>

            <div class="ui-datepicker-buttonpane ui-widget-content">
                <button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">Clear</button>
            </div>




            <button type="submit" class="button alt wp-element-button" name="woocommerce_checkout_place_order" id="place_order" value="Plasează comanda" data-value="Plasează comanda">Place the order</button>
        </div >



    );
};

export default Order;