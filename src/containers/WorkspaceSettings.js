import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { WorkspaceSettings } from '../components/WorkspaceSettings';
import * as actions from '../state/actions';
import { getTheme } from '../state/selectors';

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
const mapDispatchToProps = {
  updateConfig: actions.updateConfig,
};

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
const mapStateToProps = state => (
  {
    theme: getTheme(state),
  }
);

const enhance = compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps),
  withPlugins('WorkspaceSettings'),
);

export default enhance(WorkspaceSettings);
