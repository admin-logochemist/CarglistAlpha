import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/termsofuse.module.css'
import Header from './Header';
import Footer from '../components/component/Footer';

export default function privacy() {
  return (
    <>
      <Header />
      <div id="setHeaderBottomGap"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section className={styles.simple_page_content}>
              <section className={styles.privacy_policy_heading}>
                <h2>weblisted Privacy Policy <small>(updated September 15, 2020)</small></h2>

              </section>
              <p>
                This policy details how data about you is used when you access our websites and services, including via our mobile applications (together, "WL") or interact with us. If we update it, we will revise the date, place notices on WL if changes are material, and/or obtain your consent as required by law.
              </p>
              <h4>1. Protecting your privacy</h4>
              <ul>
                <li>We take precautions to prevent unauthorized access to or misuse of data about you.</li>
                <li>We do not run ads, other than the classifieds posted by our users.</li>
                <li>We do not share your data with third parties for marketing purposes.</li>
                <li>We do not engage in cross-marketing or link-referral programs.</li>
                <li>We do not employ tracking devices for marketing purposes.</li>
                <li>We do not send you unsolicited communications for marketing purposes.</li>
                <li>We do not engage in affiliate marketing (and prohibit it on WL).</li>
                <li>We do provide email proxy &amp; relay services to reduce unwanted email.</li>
                <li>Please review privacy policies of any third party sites linked to from WL.</li>
                <li>We do not respond to "Do Not Track" signals (see allaboutdnt.com).</li>
              </ul>

              <h4>2. Data we collect, use and disclose:</h4>
              <p>Below is a list of all the types of data we have collected in the last 12 months, where we got it, why we collected it and the categories of third parties to whom we disclosed it. We do not sell your data to third parties. Please note that disclosure to "Payment processors" applies when you pay for a weblisted post using a credit card.</p>


              <table cellPadding={3} cellSpacing={0} border="1" className={styles.pp_table}>
                <tbody>
                  <tr>
                    <td valign="top">
                      <b>Data type</b>
                    </td>
                    <td valign="top">
                      <b>Where we got it</b>
                    </td>
                    <td valign="top">
                      <b>Why collected</b>
                    </td>
                    <td valign="top">
                      <b>Disclosed to</b>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      First and last name
                    </td>
                    <td valign="top">
                      User entry
                    </td>
                    <td valign="top">
                      Facilitating transactions and personalizing your use of WL
                    </td>
                    <td valign="top">
                      Payment processors
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Email address
                    </td>
                    <td valign="top">
                      User entry
                    </td>
                    <td valign="top">
                      Account creation, user-to-user and WL-to-user communications and combatting fraud/abuse
                    </td>
                    <td valign="top">
                      No one
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Phone number
                    </td>
                    <td valign="top">
                      User entry
                    </td>
                    <td valign="top">
                      User-to-user communications, combatting fraud/abuse, personalizing your use of WL
                    </td>
                    <td valign="top">
                      Payment processors and phone verification service providers
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Mailing or street address
                    </td>
                    <td valign="top">
                      User entry
                    </td>
                    <td valign="top">
                      Account and post creation, WL communicating with corporate users, facilitating transactions and personalizing your use of WL
                    </td>
                    <td valign="top">
                      Payment processors
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Credit card data
                    </td>
                    <td valign="top">
                      User entry
                    </td>
                    <td valign="top">
                      Facilitating your transactions
                    </td>
                    <td valign="top">
                      Payment processors
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Geographic location (latitude and longitude)
                    </td>
                    <td valign="top">
                      User entry, IP/geolocation providers
                    </td>
                    <td valign="top">
                      Personalizing your use of WL and combatting fraud/abuse
                    </td>
                    <td valign="top">
                      No one
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Photos and other data you voluntarily provide, post on or send via WL
                    </td>
                    <td valign="top">
                      User entry
                    </td>
                    <td valign="top">
                      Facilitating and personalizing your use of WL
                    </td>
                    <td valign="top">
                      No one
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Saved searches, account preferences, favorite/hidden postings
                    </td>
                    <td valign="top">
                      User entry
                    </td>
                    <td valign="top">
                      Facilitating and personalizing your use of WL
                    </td>
                    <td valign="top">
                      No one
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      HTTP browser cookie
                    </td>
                    <td valign="top">
                      User's browser, WL web server
                    </td>
                    <td valign="top">
                      Facilitating and personalizing your use of WL and combatting fraud/abuse
                    </td>
                    <td valign="top">
                      No one
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Information about your device and browser such as device ID, browser version, operating system, plugins
                    </td>
                    <td valign="top">
                      User's browser, mobile app
                    </td>
                    <td valign="top">
                      Facilitating and personalizing your use of WL and combatting fraud/abuse
                    </td>
                    <td valign="top">
                      No one
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      IP address
                    </td>
                    <td valign="top">
                      User's browser, mobile app, IP/geolocation providers
                    </td>
                    <td valign="top">
                      Combatting fraud/abuse
                    </td>
                    <td valign="top">
                      Service providers that help us combat fraud/abuse
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      Web page views, access times, HTTP headers
                    </td>
                    <td valign="top">
                      User's browser, mobile app
                    </td>
                    <td valign="top">
                      Combatting fraud/abuse
                    </td>
                    <td valign="top">
                      No one
                    </td>
                  </tr>
                </tbody>
              </table>


              <br />
              <p>We may share some or all of the above listed data in the following circumstances:</p>
              <ul>
                <li>to respond to subpoenas, search warrants, court orders, or other legal process.</li>
                <li>to protect the rights, property, or safety of WL users, WL, or the general public.</li>
                <li>at your direction (e.g. if you authorize us to share data with other users).</li>
                <li>in connection with a merger, bankruptcy, or sale/transfer of assets.</li>
              </ul>
              <h4>3. Data we store</h4>
              <ul>
                <li>We retain data as needed to facilitate and personalize your use of WL, combat fraud/abuse and/or as required by law.</li>
                <li>We make good faith efforts to store data securely, but can make no guarantees.</li>
                <li>You may access and update certain data about you via your account login.</li>
              </ul>
              <h4>4. California Users:</h4>

              <p>To learn more about the California Consumer Privacy Act and how it applies to you, please visit the <a href="">California Attorney-General's website</a>.</p>

              <p><b>Right to know:</b> You have the right to request that we disclose the data we collect, use and disclose, and other information relating to data we collect about you.</p>

              <p><b>Right to delete:</b> You have the right to request the deletion of data that we have collected from you, subject to certain exceptions. </p>

              <p><b>Right to non-discrimination:</b> You have the right not to receive discriminatory treatment for exercising the rights listed above.</p>

              <p>You may submit a request to know or delete via <a href="">weblisted.org/about/ccpa</a> or ccpa@weblisted.org . </p>

              <p>Only you, or someone you authorize to act on your behalf, may make a request to know or delete your data. An authorized agent may make a request on your behalf by providing written permission signed by you. </p>

              <p>We will need to confirm your identity before processing your request by asking you to log into your existing account (if you are a registered user) or by asking you for additional information, such as a government issued ID, to confirm your identity against information we have already collected. </p>

              <p>If you are a registered WL user under the age of 18, you may request (via eraser@weblisted.org) and obtain removal of content or information publicly posted on WL. Please note that removal does not ensure complete or comprehensive removal of said content or information from the Internet.</p>

              <h4>5. International Users</h4>
              <p>By accessing WL or providing us data, you agree we may use and disclose data we collect as described here or as communicated to you, transmit it outside your resident jurisdiction, and store it on servers in the United States. For more information please contact our privacy officer at privacy@weblisted.org .</p>
              <h4>6. Contact</h4>
              <p>If you have any questions or concerns about WL's privacy policy and practices please email privacy@weblisted.org .</p>

            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
