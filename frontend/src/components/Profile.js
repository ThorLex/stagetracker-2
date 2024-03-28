// import {useState } from "react"
import './../App.css';
import React from 'react';




const Profile = () => {
  
    
    // ... add more steps
    return (

     
      
        <div>
          <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Profil utilisateur</li>
            </ol>
          </nav>
        </div>  <div className=" mt-2 row p-0 m-0">

        
  <div className="card-body m-2 p-2">
    <h5 className="card-title">Notification &amp; Alerte</h5>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
      <h4 className="alert-heading">Primary Heading</h4>
      <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
      <hr />
      <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
    </div>
   
  </div>


        <div className=" mt-2 col-4">

    
  
     <div className="col-12">
  <div className="card">
    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
      <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
      <h2>Kevin Anderson</h2>
      <h3>Web Designer</h3>
      <div className="social-links mt-2">
        <a href = "moi"className="twitter"><i className="bi bi-twitter" /></a>
        <a href = "moi"className="facebook"><i className="bi bi-facebook" /></a>
        <a href = "moi"className="instagram"><i className="bi bi-instagram" /></a>
        <a href = "moi"className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </div>
</div>

        
        
        
        
        
       
        </div>
        
        
        <div className="col-8 mt-2">
      <div className="card">
  <div className="card-body pt-3">

    <ul className="nav nav-tabs nav-tabs-bordered" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active"  data-bs-toggle="tab" value="hid" data-bs-target="#profile-overview" aria-selected="true" role="tab">Overview</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link"  data-bs-toggle="tab"  value="hidd"  data-bs-target="#profile-edit" aria-selected="false"   tabIndex={-1} role="tab">Edit Profile</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="tab"    value="hiddd" data-bs-target="#profile-settings" aria-selected="false"   tabIndex={-1} role="tab">Settings</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="tab"   value="hiddd"  data-bs-target="#profile-change-password" aria-selected="false"   tabIndex={-1} role="tab">Change Password</button>
      </li>
    </ul>


<div >
      <div  className="tab-pane fade show active profile-overview" id="profile-overview" role="tabpanel">
        <h5 className="card-title">About</h5>
        <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>
        <h5 className="card-title">Profile Details</h5>
        <div className="row">
          <div className="col-lg-3 col-md-4 label ">Full Name</div>
          <div className="col-lg-9 col-md-8">Kevin Anderson</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Company</div>
          <div className="col-lg-9 col-md-8">Lueilwitz, Wisoky and Leuschke</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Job</div>
          <div className="col-lg-9 col-md-8">Web Designer</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Country</div>
          <div className="col-lg-9 col-md-8">USA</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Address</div>
          <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Phone</div>
          <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Email</div>
          <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
        </div>
      </div> 
      </div>


      <div >
  <form>
          <div className="row mb-3">
            <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
            <div className="col-md-8 col-lg-9">
              <img src="assets/img/profile-img.jpg" alt="Profile" />
              <div className="pt-2">
                <a href = "moi"className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload" /></a>
                <a href = "moi"className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash" /></a>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
            <div className="col-md-8 col-lg-9">
              <input name="fullName" type="text" className="form-control" id="fullName" defaultValue="Kevin Anderson" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">About</label>
            <div className="col-md-8 col-lg-9">
              <textarea name="about" className="form-control" id="about" style={{height: 100}} defaultValue={"Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
            <div className="col-md-8 col-lg-9">
              <input name="company" type="text" className="form-control" id="company" defaultValue="Lueilwitz, Wisoky and Leuschke" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
            <div className="col-md-8 col-lg-9">
              <input name="job" type="text" className="form-control" id="Job" defaultValue="Web Designer" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
            <div className="col-md-8 col-lg-9">
              <input name="country" type="text" className="form-control" id="Country" defaultValue="USA" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
            <div className="col-md-8 col-lg-9">
              <input name="address" type="text" className="form-control" id="Address" defaultValue="A108 Adam Street, New York, NY 535022" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
            <div className="col-md-8 col-lg-9">
              <input name="phone" type="text" className="form-control" id="Phone" defaultValue="(436) 486-3538 x29071" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
            <div className="col-md-8 col-lg-9">
              <input name="email" type="email" className="form-control" id="Email" defaultValue="k.anderson@example.com" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
            <div className="col-md-8 col-lg-9">
              <input name="twitter" type="text" className="form-control" id="Twitter" defaultValue="https://twitter.com/#" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
            <div className="col-md-8 col-lg-9">
              <input name="facebook" type="text" className="form-control" id="Facebook" defaultValue="https://facebook.com/#" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
            <div className="col-md-8 col-lg-9">
              <input name="instagram" type="text" className="form-control" id="Instagram" defaultValue="https://instagram.com/#" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
            <div className="col-md-8 col-lg-9">
              <input name="linkedin" type="text" className="form-control" id="Linkedin" defaultValue="https://linkedin.com/#" />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
        </div>

        <div>
             <form>
          <div className="row mb-3">
            <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
            <div className="col-md-8 col-lg-9">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="changesMade" defaultChecked />
                <label className="form-check-label" htmlFor="changesMade">
                  Changes made to your account
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="newProducts" defaultChecked />
                <label className="form-check-label" htmlFor="newProducts">
                  Information on new products and services
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="proOffers" />
                <label className="form-check-label" htmlFor="proOffers">
                  Marketing and promo offers
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="securityNotify" defaultChecked disabled />
                <label className="form-check-label" htmlFor="securityNotify">
                  Security alerts
                </label>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
        </div>

<div  >
        <form>
          <div className="row mb-3">
            <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
            <div className="col-md-8 col-lg-9">
              <input name="password" type="password" className="form-control" id="currentPassword" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
            <div className="col-md-8 col-lg-9">
              <input name="newpassword" type="password" className="form-control" id="newPassword" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
            <div className="col-md-8 col-lg-9">
              <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Change Password</button>
          </div>
        </form>
        </div>
     
       
   
    </div>
  </div>
</div>
        </div>
        </div>
        

      );
}
 
export default Profile;