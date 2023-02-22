import React, {useState} from 'react'

export default function ({setstep}) {

        const [eat_fruits, setEatsFruits] = useState("");
        const [fruit_servings, setFruitServings] = useState("");
        const [eat_veges, setEatVeges] = useState("");
        const [vegies_servings, setVegesServings] = useState("");
        const [salty_sause, setSaltySause] = useState("");
        const [salty_sause_inhouse, setSaltySauseInHouse] = useState("");
        const [processed_foods_high_in_salt, setProcessedFoodsHighInSause] = useState("");
        const [salty_sause_consume, setSaltySauseConsumed] = useState("");
        const [lower_salt_importance, setImportanceLoweringSalt] = useState("");
        const [idea_on_excess_salt, setIdeaOnExcessSalt] = useState("");
        
        const [lowering_salt_actions, setLoweringSaltAction] = useState({
            limit_processed_foods: "",
            check_salt_content_of_labels: "",
            buy_low_salt_foods: "",
            use_spice_inplace_salt: "",
            avoid_outide_food: "",
            do_other_things: "",
            specify_others: ""
        });

      

        const handleEatFruitsChange = (e) => setEatsFruits(e.target.value);
        const handleFruitsServingChange = (e) =>setFruitServings(e.target.value);
        const handleEatVegesChange = (e) => setEatVeges(e.target.value);
        const handleVegesServingsChange = (e) => setVegesServings(e.target.value);
        const handleSaltSauseChange = (e) => setSaltySause(e.target.value);
        const handleSaltySauseInHomeChange = (e) => setSaltySauseInHouse(e.target.value);
        const handleProcessedFoodHighInSauseChange = (e) => setProcessedFoodsHighInSause(e.target.value);
        const handleSaltySauseConsumeChange = (e) => setSaltySauseConsumed(e.target.value);
        const handleImprtanceLowerSaltChange = (e) => setImportanceLoweringSalt(e.target.value);
        const handleIdeaOnExcessSaltChange = (e) => setIdeaOnExcessSalt(e.target.value);
        const handleLowerSaltActionChange = (e) => setLoweringSaltAction(e.target.value);

        const handleSaltLoweringActions = (val) => (e) => {
            switch (val) {
              case 1:
                setLoweringSaltAction((prevState) => ({
                  ...prevState,
                  limit_processed_foods: e.target.value,
                }));

                break;
              case 2:
                setLoweringSaltAction((prevState) => ({
                  ...prevState,
                  check_salt_content_of_labels: e.target.value,
                }));
                break;
              case 3:
                setLoweringSaltAction((prevState) => ({
                  ...prevState,
                  buy_low_salt_foods: e.target.value,
                }));
                break;
              case 4:
                setLoweringSaltAction((prevState) => ({
                  ...prevState,
                  use_spice_inplace_salt: e.target.value,
                }));
                break;
              case 5:
                setLoweringSaltAction((prevState) => ({
                  ...prevState,
                  avoid_outide_food: e.target.value,
                }));
                break;
              case 6:
                setLoweringSaltAction((prevState) => ({
                  ...prevState,
                  do_other_things: e.target.value,
                }));
               case 7:
                setLoweringSaltAction((prevState) => ({
                  ...prevState,
                  specify_others: e.target.value,
                }));
            }
        };



      const handleNext = () => {
        setstep(6);
      };

      const handleBack = () => {
        setstep(4);
      };

  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>CORE: Diets</strong>
            <p>
              The next questions ask about the fruits and vegetables that you
              usually eat. I have a nutrition card here that shows you some
              examples of local fruits and vegetables. Each picture represents
              the size of a serving. As you answer these questions please think
              of a typical week in the last year.
            </p>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    {" "}
                    <strong>1.</strong> In a typical week, on how many days do
                    you eat fruit?
                  </label>
                  <input
                    required
                    onChange={handleEatFruitsChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    {" "}
                    <strong>2.</strong> How many servings of fruit do you eat on
                    one of those days?
                  </label>
                  <input
                    required
                    onChange={handleFruitsServingChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    {" "}
                    <strong>3.</strong> In a typical week, on how many days do
                    you eat vegetables?
                  </label>
                  <input
                    required
                    onChange={handleEatVegesChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    {" "}
                    <strong>4.</strong> How many servings of vegetables do you
                    eat on one of those days?
                  </label>
                  <input
                    required
                    onChange={handleVegesServingsChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>Dietary salt</strong>
            <p style={{ textAlign: "justify" }}>
              With the next questions, we would like to learn more about salt in
              your diet. Dietary salt includes ordinary table salt, unrefined
              salt such as sea salt, iodized salt, salty stock cubes and
              powders, and salty sauces such as soy sauce or fish sauce (see
              showcard). The following questions are on adding salt to the food
              right before you eat it, on how food is prepared in your home, on
              eating processed foods that are high in salt such as [insert
              country specific examples], and questions on controlling your salt
              intake. Please answer the questions even if you consider yourself
              to eat a diet low in salt.
            </p>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>5.</strong> How often do you add salt or a salty
                    sauce such as soy sauce to your food right before you eat it
                    or as you are eating it?
                  </label>
                  <select
                    defaultValue={""}
                    required
                    className="form-control"
                    onChange={handleSaltSauseChange}
                  >
                    <option value="">--Select an option--</option>
                    <option value="Always">Always</option>
                    <option value="Often">Often</option>
                    <option value="Sometimes">Sometimes </option>
                    <option value="Rarely">Rarely</option>
                    <option value="Never">Never</option>
                    <option value="Don't know">Don't know</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>6.</strong> How often is salt, salty seasoning or a
                    salty sauce added in cooking or preparing foods in your
                    household?
                  </label>
                  <select
                    defaultValue={""}
                    required
                    onChange={handleSaltySauseInHomeChange}
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Always">Always</option>
                    <option value="Often">Often</option>
                    <option value="Sometimes">Sometimes </option>
                    <option value="Rarely">Rarely</option>
                    <option value="Never">Never</option>
                    <option value="Don't know">Don't know</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>7.</strong> How often do you eat processed food high
                    in salt? By processed food high in salt, I mean foods that
                    have been altered from their natural state, such as packaged
                    salty snacks, canned salty food including pickles and
                    preserves, salty food prepared at a fast food restaurant,
                    cheese, bacon and processed meat [add country specific
                    examples].
                  </label>
                  <select
                    onChange={handleProcessedFoodHighInSauseChange}
                    required
                    defaultValue={""}
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Always">Always</option>
                    <option value="Often">Often</option>
                    <option value="Sometimes">Sometimes </option>
                    <option value="Rarely">Rarely</option>
                    <option value="Never">Never</option>
                    <option value="Don't know">Don't know</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>8.</strong> How much salt or salty sauce do you
                    think you consume?
                  </label>
                  <select
                    defaultValue={""}
                    required
                    onChange={handleSaltySauseConsumeChange}
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Far too much">Far too much</option>
                    <option value="Too much">Too much</option>
                    <option value="Just the right amount">
                      Just the right amount{" "}
                    </option>
                    <option value="Too little">Too little</option>
                    <option value="Far too little">Far too little</option>
                    <option value="Don't know">Don't know</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>9.</strong> How important to you is lowering the
                    salt in your diet?
                  </label>
                  <select
                    onChange={handleImprtanceLowerSaltChange}
                    defaultValue={""}
                    required
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Very important">Very important</option>
                    <option value="Somewhat important">
                      Somewhat important
                    </option>
                    <option value="Not at all important ">
                      Not at all important
                    </option>
                    <option value="Don't know">Don't know</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>10.</strong> Do you think that too much salt or
                    salty sauce in your diet could cause a health problem?
                  </label>
                  <select
                    onChange={handleIdeaOnExcessSaltChange}
                    defaultValue={""}
                    required
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Don't know">Don't know</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <p>
              <strong>11.</strong> Do you do any of the following on a regular
              basis to control your salt intake?
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(I)</strong> Limit consumption of processed foods
                  </label>
                  <select
                    defaultValue={""}
                    onChange={() => handleLowerSaltActionChange(1)}
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(II)</strong> Look at the salt or sodium content on
                    food labels
                  </label>
                  <select
                    defaultValue={""}
                    onChange={() => handleLowerSaltActionChange(2)}
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(III)</strong> Buy low salt/sodium alternatives
                  </label>
                  <select
                    defaultValue={""}
                    onChange={() => handleLowerSaltActionChange(3)}
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(III)</strong> Use spices other than salt when
                    cooking
                  </label>
                  <select
                    onChange={() => handleLowerSaltActionChange(4)}
                    defaultValue={""}
                    required
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(IV)</strong> Avoid eating foods prepared outside of
                    a home
                  </label>
                  <select
                    defaultValue={""}
                    className="form-control"
                    onChange={() => handleLowerSaltActionChange(5)}
                  >
                    <option value="">--Select an option--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(IV)</strong> Do other things specifically to
                    control your salt intake
                  </label>
                  <select
                    defaultValue={""}
                    className="form-control"
                    onChange={() => handleLowerSaltActionChange(6)}
                  >
                    <option value="">--Select an option--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(IV)</strong> Other (Please sppecify)
                  </label>
                  <input
                    className="form-control"
                    onChange={() => handleLowerSaltActionChange(7)}
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-2">
            <button
              className="btn btn-danger btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-warning btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-save"></i> Save & Continue Later
            </button>
          </div>
          <div className="col-md-3">
            <button
              type="submit"
              className="btn btn-info btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-arrow-right"></i> Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
