import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Switch } from 'react-native';
import { darkTheme, lightTheme } from './themes';

const App = () => {
    const [theme, setTheme] = useState(lightTheme);
    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle={
                    theme.name === 'dark' ? 'light-content' : 'dark-content'
                }
            />
            <SafeAreaContainer>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <SectionContainer>
                        <ThemeSwitchContainer>
                            <SectionTitle>Dark Mode</SectionTitle>
                            <Switch
                                value={theme.name === 'dark'}
                                onValueChange={(value) => {
                                    if (value) {
                                        setTheme(darkTheme);
                                    } else {
                                        setTheme(lightTheme);
                                    }
                                }}
                            />
                        </ThemeSwitchContainer>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionTitle>Step One</SectionTitle>
                        <SectionDescription>
                            Edit <HighlightedText>App.tsx</HighlightedText> to
                            change this screen and then come back to see your
                            edits.
                        </SectionDescription>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionTitle>See Your Changes</SectionTitle>
                        <SectionDescription>
                            Press Cmd + R in the simulator to reload your app's
                            code.
                        </SectionDescription>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionTitle>Debug</SectionTitle>
                        <SectionDescription>
                            Press Cmd + D in the simulator or shake your device
                            to open the React Native debug menu.
                        </SectionDescription>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionTitle>Learn More</SectionTitle>
                        <SectionDescription>
                            Read the docs to discover what to do next.
                        </SectionDescription>
                    </SectionContainer>
                </ScrollView>
            </SafeAreaContainer>
        </ThemeProvider>
    );
};

const SafeAreaContainer = styled(SafeAreaView)`
    background-color: ${(props) => props.theme.colors.background};
    flex-grow: 1;
`;

const ScrollView = styled.ScrollView`
    background-color: ${(props) => props.theme.colors.background};
`;

const SectionContainer = styled.View`
    margin-top: 32px;
    padding: 0px 24px;
`;

const ThemeSwitchContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const SectionTitle = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.titleFont};
`;

const SectionDescription = styled.Text`
    margin-top: 8px;
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.descriptionFont};
`;

const HighlightedText = styled.Text`
    font-weight: 700;
`;

export default App;
