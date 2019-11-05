import React from "react";
import MenuItem from "../menu-item/MenuItem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/selectors/directory.selectors";
import { connect } from "react-redux";
import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
