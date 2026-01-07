import Svg, {Path} from 'react-native-svg';
import {AppColors} from '../utils/AppConstants';

const Layer = () => {
  return (
    <Svg width="400" height="100" viewBox="-10 -10 1440 90">
      <Path
        fill={AppColors.secondaryColor.darkGray}
        fill-opacity="1"
        d="M0,288L60,293.3C120,299,240,309,360,298.7C480,288,600,256,720,202.7C840,149,960,75,1080,85.3C1200,96,1320,192,1380,240L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </Svg>
  );
};
const Layer2 = () => {
  return (
    <Svg width="400" height="100" viewBox="-10 -10 1440 90">
      <Path
        fill={AppColors.primaryColor.darkBlack}
        fill-opacity="1"
        d="M0,288L60,293.3C120,299,240,309,360,298.7C480,288,600,256,720,202.7C840,149,960,75,1080,85.3C1200,96,1320,192,1380,240L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </Svg>
  );
};

export {Layer, Layer2};
