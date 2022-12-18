import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Aboutus from "./components/pages/Aboutus";
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div className="App">
      <header className="App-header header ">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact component={<Home />} />
            <Route path="/services" component={<Aboutus />} />
            <Route path="/products" component={<Products />} />
            <Route path="/sign-up" component={<SignUp />} />
          </Routes>
        </Router>
      </header>
      <body className="container-fluid bg-body ">
        <div className=" container body-div1">
          <div className="container">
            <h1 className="h1">About our College</h1>
            <p>
              Jyothy Institute of Technology under the governance of Jyothy
              Charitable Trust which is headquartered at Bengaluru mainly
              focuses on delivering quality education that equips students for
              life and career. We offer Undergraduate, Postgraduate and Research
              Programmes in various disciplines. Focused teaching facilities
              coupled with practical and forward-thinking programmes lend a hand
              to students throughout their academic period. A significant amount
              of emphasis is given for extracurricular activities through
              various clubs, technical chapters, sports, and cultural
              activities.
            </p>
          </div>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h3 className="h3">Our Vision</h3>
                <p>
                  Our Vision To be an Institution of Excellence in Engineering
                  education, Innovation and Research and work towards evolving
                  great leaders for the country's future and meeting global
                  needs.
                </p>
              </div>
              <div className="col-12 col-sm-6">
                <h3 className="font-weight-bold">Our Mission</h3>
                <p>
                  Our Mission The Institution aims at providing a vibrant,
                  intellectually and emotionally rich teaching learning
                  environment with the State of the Art Infrastructure and
                  recognizing and nurturing the potential of each individual to
                  evolve into ones own self and contribute to the welfare of
                  all.
                </p>
              </div>
            </div>
          </div>
          <div className="container course-class text-center">
            <div className="mt-4">
              <h2 className="font-weight-bold">Accreditation Status</h2>
              <p>
                Following programmes are accredited by NBA till 2025 Computer
                Science & Engineering Information Science & Engineering
                Electronics & Communication Engineering Civil Engineering
              </p>
            </div>

            <div className="mt-4">
              <h2 className="h2">Courses Offered</h2>
              <div class="row row-header">
                <div className="col-12 col-sm-4">
                  <h3>Under Graduate :</h3>
                  <div class="dropdown">
                    <button
                      class="btn btn-lg  dropdown-toggle dropdown-class"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Civil Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Civil Engineering is a diversified and one of the oldest
                        branches of Engineering that encompasses study in fields
                        of Structural Engineering, Geotechnical Engineering,
                        Environmental Engineering, Construction Engineering &
                        management & various other specialized areas. Civil
                        Engineering mainly involves Planning, Analysis & Design
                        of different infrastructure projects & implementation
                        through a sustainable approach on a turn-key basis.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg  dropdown-toggle dropdown-class"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Computer Science And Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Computer Science & Engineering started in
                        the year 2011 with an present intake of 180 students in
                        undergraduate program. The department has adequate
                        number of faculties with a doctorate degree and pursuing
                        doctoral studies. Many faculties have published several
                        technical papers in national/international journals and
                        conferences. Some of the faculties are involved in
                        institutional level activities and actively involved in
                        interdisciplinary research activities. The department
                        encourages the students to conduct and participate in
                        extra-curricular/sports activities. The department of
                        computer science and engineering is guided by the
                        principles of application of knowledge acquired in the
                        classroom to solve the problems of the real world.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg  dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Electronics And Communication Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Electronics & Communication Engineering
                        started in the year 2011 with an intake of 60 students
                        in undergraduate program. The department has a rich
                        tradition in research and teaching. The research
                        interests of the faculty members of the department
                        encompass the wide area of applied and fundamental
                        aspects of Electronics and Communication Engineering.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Information Science And Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Information Science and Engineering (ISE)
                        offers four year B.E course in the discipline started in
                        the year of 2011 with an annual intake of 60 students.
                        Information Science and Engineering is one of the core
                        fields that have modernised our society and world in the
                        21st century..
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg  dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Mechanical Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        The Department of Mechanical Engineering is functioning
                        since inception of the college in the year 2011 with an
                        revised intake of 30 each academic year. Department
                        consists of highly dedicated, well qualified and
                        competent faculty members active in teaching, research
                        and building quality Profile of students. Most of the
                        faculty members are from reputed academic institutions
                        with research and industry background contributing to
                        implementation of industry oriented education to
                        students.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Artificial Intelligence And Machine Learning
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Artificial Intelligence and Machine
                        Learning (AI & ML) offers a four year undergraduate
                        programme in B.E and has been started in the year 2020
                        with an intake of 60 students. AIML is one of the newest
                        course introduced in the industry to add lot of value to
                        the current processes and also provide a thoughtful path
                        for the individuals to move forward.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Humanities And Sciences
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Artificial Intelligence and Machine
                        Learning (AI & ML) offers a four year undergraduate
                        programme in B.E and has been started in the year 2020
                        with an intake of 60 students. AIML is one of the newest
                        course introduced in the industry to add lot of value to
                        the current processes and also provide a thoughtful path
                        for the individuals to move forward.
                      </p>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <h3 className="font-weight-bold">Post Graduate :</h3>
                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Structural Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">Structural Engineering</p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Computer Science And Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Computer Science & Engineering started in
                        the year 2019 with an intake of 18 students in the
                        postgraduate programs. The department has an adequate
                        number of faculties with a doctorate degree. Many
                        faculties have published several technical papers in
                        national/international journals. The department
                        encourages students to conduct and participate in
                        extra-curricular/sports activities. The department of
                        computer science and engineering is guided by the
                        principles of application of knowledge acquired in the
                        classroom to solve the problems of the real world.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Food Technology
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        This group focuses on striving towards the safety and
                        quality of foods through excellence in analysis by
                        meeting international standards. Several fortified food
                        products which have high market potential at an
                        affordable price are being developed extensively by the
                        team members. Food Technology lab has diverse equipment
                        and machinery for pilot production of food products.
                        Some of them have been developed in-house as well. Food
                        technology team is also focusing on developing various
                        scientific approaches to evaluate the physical
                        preservation and several other processing methods for
                        various food products. Some of the specific areas are as
                        described below.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Product Design And Manufacturing
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        The department of Mechanical Engineering is functioning
                        since the inception of the college in the year 2019 with
                        an intake of 18 students each academic year. Department
                        consists of highly dedicated, well qualified and
                        competent faculty members active in teaching, research
                        and building quality profile of students. Most of the
                        faculty members are from reputed academic institutions
                        with research and industry backgrounds contributing to
                        implementation of industry-oriented education to
                        students.
                      </p>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <h3 className="font-weight-bold">Research :</h3>
                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Computer Science And Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Computer Science & Engineering was
                        recognised by VTU, Belgaum as Research Center in the
                        year 2018.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Electronics And Communications Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Civil Engineering was recognised by VTU,
                        Belgaum as Research Center in the year 2018.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Civil Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Civil Engineering was recognised by VTU,
                        Belgaum as Research Center in the year 2018.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Mechanical Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Mechanical Engineering Department of Mechanical
                        Engineering was recognised by VTU, Belgaum as Research
                        Center in the year 2016.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Bio-Technology
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Computer Science & Engineering was
                        recognised by VTU, Belgaum as Research Center in the
                        year 2018.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Physics
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Physics was recognised by VTU, Belgaum as
                        Research Center in the year 2014.
                      </p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Nano Technology
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container"></p>
                    </ul>
                  </div>
                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Mathematics
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container"></p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Food Technology
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container"></p>
                    </ul>
                  </div>

                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Polymer Science
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Computer Science & Engineering was
                        recognised by VTU, Belgaum as Research Center in the
                        year 2018.
                      </p>
                    </ul>
                  </div>
                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Material Science And Engineering
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container"></p>
                    </ul>
                  </div>
                  <div class="dropdown mt-4">
                    <button
                      class="btn btn-lg dropdown-class dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Chemistry
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <p className="container">
                        Department of Chemistry was recognised by VTU, Belgaum
                        as Research Center in the year 2017.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-header text-center">
              <h1>Our Programs</h1>
              <div>
                <p>
                  The main focus of our institution is to empower the student
                  skill indispensable for today’s industry which helps all
                  students to compete in the highly demanding global industrial
                  market. Our institution is blessed with a conglomerate of
                  highly qualified, talented, and committed teaching and support
                  staff who ensure worthy learning environment for the students.
                  And the institution hosts more than 35 doctorates and the rest
                  being masters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer class="footer mt-3">
        <div class="container ">
          <div class="row">
            <div class="col-4 col-sm-2 ">
              <h4>Links</h4>
              <ul class="list-unstyled">
                <li>
                  <a className="text-light" href="./index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-light"
                    href="./components/pages/Aboutus.js"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a className="text-light" href="./contactus.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-7 col-sm-5">
              <h4>Our Address</h4>
              <address>
                Pipeline Rd
                <br />
                near Ravi Shankar Guruji Ashram, Thathaguni
                <br />
                Karnataka 560082
                <br />
                <i className="fa fa-phone fa-lg"></i> +91 953 542 3635
                <br />
                <i className="fa fa-fax fa-lg"></i> +91 953 542 3635
                <br />
                <a
                  href="mailto:principaljyothyit@gmail.com "
                  className="text-light"
                >
                  {" "}
                  principaljyothyit@gmail.com{" "}
                </a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google "
                  href="http://google.com/+"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-youtube"></i>
                </a>
                <a className="btn btn-social-icon" href="mailto:">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2018 Example.com</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="container">
        <form className="form-bottom">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button
            type="submit"
            name="sign-in"
            className="btn btn-lg btn-primary"
          >
            Sign in
          </button>
        </form>
        <div>
          <button
            type="button"
            className="btn btn-outline-dark pmd-btn-fab pmd-ripple-effect"
          >
            <i className="material-icons pmd-sm">Link</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
