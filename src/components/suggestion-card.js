import Text from "./text";
import {CardContainer, CardSummary, CardTitle} from "./card";
import Box from "./box";
import * as React from "react";
import LoaderText from "./LoaderText";


function SuggestionCard({title, onPress, data, ...props}){
    return (
        <Box {...props}>
            <Text color={'textLight'}>{title}</Text>
            <CardContainer
                mt={10}
                onPress={onPress}
            >
                {data ? (
                    <>
                        <CardTitle>{data.madde}</CardTitle>
                        <CardSummary>{data.anlam}</CardSummary>
                    </>
                ) : (

                    <Box>
                        {/* Gotta add Box since can't return single child */}
                        <LoaderText />
                        <LoaderText width={250} mt={10} />
                    </Box>
                )}
            </CardContainer>
        </Box>
    )
}

export default SuggestionCard
