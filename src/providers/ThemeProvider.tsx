import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { theme } from "@/theme";
import { TBaseProviderProps } from "@/type";

export function ThemeProvider({ children }: TBaseProviderProps) {
  // const isFetching = useIsFetching();

  // useEffect(() => {
  // 	if (isFetching && !started) {
  // 		startNavigationProgress();
  // 		started = true;
  // 	} else if (!isFetching && started) {
  // 		completeNavigationProgress();
  // 		started = false;
  // 	}

  // 	return () => resetNavigationProgress();
  // }, [isFetching]);

  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Notifications position="bottom-center" />
      {/* <NavigationProgress initialProgress={0} /> */}

      {children}
    </MantineProvider>
  );
}
