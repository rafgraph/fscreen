import * as React from 'react';
import fscreen from 'fscreen';
import { DarkModeButton } from './ui/DarkModeButton';
import { GitHubIconLink } from './ui/GitHubIconLink';
import { Link } from './ui/Link';
import { Button } from './ui/Button';
import { styled, globalCss } from './stitches.config';

const AppContainer = styled('div', {
  minHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$pageBackground',
});

const ContentContainer = styled('div', {
  maxWidth: '300px',
  margin: '0px 15px 6vh',
});

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '18px',
});

const H1 = styled('h1', {
  fontSize: '26px',
  marginRight: '16px',
});

const HeaderIconContainer = styled('span', {
  width: '78px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  gap: '12px',
});

const InfoContainer = styled('p', {
  fontSize: '14px',
  margin: '18px 0',
});

const Status = styled('p', {
  margin: '6px 0',
});

const Bool = styled('code', {
  variants: {
    bool: {
      true: {
        color: '$green',
      },
      false: {
        color: '$red',
      },
    },
  },
});

const FullscreenButton = styled(Button, {
  display: 'block',
  fontSize: '18px',
  border: '2px solid',
  borderRadius: '6px',
  width: '100%',
  padding: '14px',
  textAlign: 'center',
  marginTop: '36px',
});

export const App = () => {
  globalCss();

  const [inFullscreenMode, setInFullscreenMode] = React.useState(false);

  const handleFullscreenChange = React.useCallback((e) => {
    let change = '';
    if (fscreen.fullscreenElement !== null) {
      change = 'Entered fullscreen mode';
      setInFullscreenMode(true);
    } else {
      change = 'Exited fullscreen mode';
      setInFullscreenMode(false);
    }
    console.log(change, e);
  }, []);

  const handleFullscreenError = React.useCallback((e) => {
    console.log('Fullscreen Error', e);
  }, []);

  React.useEffect(() => {
    if (fscreen.fullscreenEnabled) {
      fscreen.addEventListener(
        'fullscreenchange',
        handleFullscreenChange,
        false,
      );
      fscreen.addEventListener('fullscreenerror', handleFullscreenError, false);
      return () => {
        fscreen.removeEventListener('fullscreenchange', handleFullscreenChange);
        fscreen.removeEventListener('fullscreenerror', handleFullscreenError);
      };
    }
  });

  const appElement = React.useRef<HTMLDivElement>(null!);

  const toggleFullscreen = React.useCallback(() => {
    if (inFullscreenMode) {
      fscreen.exitFullscreen();
    } else {
      fscreen.requestFullscreen(appElement.current);
    }
  }, [inFullscreenMode]);

  return (
    <AppContainer ref={appElement}>
      <ContentContainer>
        <HeaderContainer>
          <H1>Fscreen Demo</H1>
          <HeaderIconContainer>
            <DarkModeButton />
            <GitHubIconLink
              title="GitHub repository for Fscreen"
              href="https://github.com/rafgraph/fscreen"
            />
          </HeaderIconContainer>
        </HeaderContainer>
        <InfoContainer>
          Vendor agnostic access to the{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API">
            Fullscreen API
          </Link>
        </InfoContainer>

        <Status>
          Fullscreen enabled:{' '}
          <Bool
            bool={fscreen.fullscreenEnabled}
          >{`${fscreen.fullscreenEnabled}`}</Bool>
        </Status>
        <Status>
          Currently in fullscreen mode:{' '}
          <Bool bool={inFullscreenMode}>{`${inFullscreenMode}`}</Bool>
        </Status>

        <FullscreenButton
          onClick={toggleFullscreen}
          disabled={!fscreen.fullscreenEnabled}
        >
          {(!fscreen.fullscreenEnabled && 'Fullscreen Is Not Available') ||
            (inFullscreenMode && 'Exit Fullscreen Mode') ||
            'Enter Fullscreen Mode'}
        </FullscreenButton>
      </ContentContainer>
    </AppContainer>
  );
};
