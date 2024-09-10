
type Props = {
    TextComponent : React.ReactNode
}


function withGradientText (TextComponent: React.ReactNode) {
        return <TextComponent />
}

const TextGradient = withGradientText(TextComponent)
export default TextGradient;