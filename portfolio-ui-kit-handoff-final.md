# Portfolio UI Kit Handoff

## Context
This document consolidates the current UI Kit foundation for the portfolio website. It is intended as a handoff artifact for Antigravity or another vibecoding workflow so the system can be translated into implementation rules without inventing a parallel visual language.

The portfolio should remain clean, focused on who the designer is, what they do, and what they have done. It should not behave like a traditional CV-heavy site.

## Design principles
- Use semantic tokens as the source of truth in implementation.
- Primitive colors are documented for reference and token construction, but should not be used directly in final UI unless explicitly mapped.
- Maintain a minimal, editorial, product-designer aesthetic.
- Preserve consistency between design tokens, components, and coded output.

## Color system

### Primitive colors
Primitive colors exist for reference and tokenization. They are not the recommended colors for direct UI usage.

#### Yellow scale
- Yellow 100: `#FFF9C1`
- Yellow 200: `#FFF886`
- Yellow 300: `#FFEC41`
- Yellow 400: `#FFDB0D`
- Yellow 500: `#FFCC00`
- Yellow 600: `#D19500`
- Yellow 700: `#A66A02`
- Yellow 800: `#89530A`
- Yellow 900: `#74430F`

#### Grey scale
- Grey 100: `#F8F9FA`
- Grey 200: `#E9ECEF`
- Grey 300: `#DEE2E6`
- Grey 400: `#CED4DA`
- Grey 500: `#ADB5BD`
- Grey 600: `#6C757D`
- Grey 700: `#495057`
- Grey 800: `#343A40`
- Grey 900: `#212529`

### Semantic colors
Semantic tokens should be used in components and coded implementation.

#### Fill
- Yellow: `#FFCC00`
- Yellow Light: `#FFEC41`
- Yellow Dark: `#D19500`
- Black: `#212529`
- Grey Dark: `#343A40`
- Grey Medium: `#6C757D`
- Grey Light: `#ADB5BD`
- White: `#F8F9FA`

#### Stroke
- Yellow: `#FFCC00`
- Yellow Light: `#FFEC41`
- Yellow Dark: `#D19500`
- Black: `#212529`
- Grey Dark: `#343A40`
- Grey Medium: `#6C757D`
- Grey Light: `#ADB5BD`
- White: `#F8F9FA`

#### Text
- Yellow: `#FFCC00`
- Yellow Dark: `#D19500`
- Black: `#212529`
- Grey Dark: `#343A40`
- Grey Medium: `#6C757D`
- Grey Light: `#ADB5BD`
- White: `#F8F9FA`

#### Status
- Success: `#5AC071`
- Danger: `#E94D5C`
- Warning: `#EAC965`
- Info: `#49C2D5`

### Color usage rules
- Do not use primitive scales directly in components unless mapped to a semantic token.
- Prefer semantic `Fill`, `Stroke`, and `Text` tokens for all UI decisions.
- Keep the portfolio visually restrained, using yellow as the primary accent and neutral greys/blacks for structure and readability.

## Typography

### Font families
- Headings / display: `Google Sans Flex`
- Body / labels / caption: `Enriqueta`

Body, labels, and caption all use Enriqueta.

### Typography scale

#### Headings
- H1: `Google Sans Flex`, 700, `3.33rem`, `letter-spacing: -0.03em`, `line-height: 1.1` (recommended implementation value)
- H2: `Google Sans Flex`, 700, `2.67rem`, `letter-spacing: -0.03em`, `line-height: 1.1`
- H3: `Google Sans Flex`, 700, `2.33rem`, `letter-spacing: -0.02em`, `line-height: 1.15`
- H4: `Google Sans Flex`, 700, `2rem`, `letter-spacing: -0.02em`, `line-height: 1.2`
- H5: `Google Sans Flex`, 700, `1.67rem`, `letter-spacing: -0.02em`, `line-height: 1.2`
- H6: `Google Sans Flex`, 700, `1.33rem`, `letter-spacing: -0.02em`, `line-height: 1.2`

#### Body
- Body Regular: `Enriqueta`, 400, `1.33rem`, `letter-spacing: 0em`, `line-height: 1.75`.
- Body Bold: `Enriqueta`, 700, `1.33rem`, `letter-spacing: 0em`, `line-height: 1.75`.

#### Label
- Label Regular: `Enriqueta`, 400, `1.17rem`, `letter-spacing: 0em`, `line-height: 1.71`.
- Label Bold: `Enriqueta`, 700, `1.17rem`, `letter-spacing: 0em`, `line-height: 1.71`.

#### Caption
- Caption Regular: `Enriqueta`, 400, `1rem`, `letter-spacing: 0em`, `line-height: 1.67`.
- Caption Bold: `Enriqueta`, 700, `1rem`, `letter-spacing: 0em`, `line-height: 1.67`.

### Typography notes
- Original design documentation also includes pt values, but implementation should prioritize `rem`.
- Original heading line height was shown as `Auto`; implementation values above are recommended to avoid ambiguity in code.
- Figma percentage letter-spacing was converted to CSS-ready `em` values.
- Body, Label, and Caption now use Enriqueta.

## Spacing scale
The spacing system follows a 4px rhythm.

- `space-1`: `4px`
- `space-2`: `8px`
- `space-3`: `12px`
- `space-4`: `16px`
- `space-5`: `20px`
- `space-6`: `24px`
- `space-7`: `28px`
- `space-8`: `32px`
- `space-9`: `36px`
- `space-10`: `40px`
- `space-11`: `44px`
- `space-12`: `48px`

### Spacing usage notes
- Use smaller values for tight UI spacing, icon gaps, and compact alignment.
- Use mid values for component padding, button padding, and card spacing.
- Use larger values for layout separation and section rhythm.

## Shadow system
- `shadow-none`: `none`
- `shadow-sm`: `0 1px 4px rgba(0, 0, 0, 0.10)`
- `shadow-md`: `0 4px 10px rgba(0, 0, 0, 0.12)`
- `shadow-lg`: `0 8px 35px rgba(0, 0, 0, 0.16)`

### Shadow usage notes
- `shadow-sm` for subtle elevation.
- `shadow-md` for cards or interactive containers.
- `shadow-lg` for more prominent floating layers or modals.

## Button component

### Shared button rules
- All buttons use `H6` typography.
- All buttons use `Semantic/Fill/Black` for text unless a variant explicitly overrides it.
- Border radius: `4px`.
- Padding: `16px` top and bottom, `24px` left and right.

### Variants
- Fill.
- Outline.
- Text.
- Outline White.
- Text White.

### States
- Default.
- Hover.

### Variant specs

#### Fill
- Default fill: `Semantic/Fill/Yellow`.
- Hover fill: `Semantic/Fill/Yellow Light`.
- Text color: `Semantic/Fill/Black`.

#### Outline
- Default fill: `Semantic/Fill/White`.
- Default stroke: `Semantic/Stroke/Black`.
- Text color: `Semantic/Fill/Black`.

#### Text
- Default text color: `Semantic/Text/Grey Medium`.
- Text decoration: underlined.
- Hover text color: `Semantic/Text/Black`.
- Hover decoration: underlined.

#### Outline White
- Default stroke: `Semantic/Stroke/White`.
- Default text color: `Semantic/Text/White`.
- Hover stroke: `Semantic/Stroke/Grey Light`.
- Hover text color: `Semantic/Text/Grey Light`.

#### Text White
- Default text color: `Semantic/Text/White`.
- Default decoration: underlined.
- Hover text color: `Semantic/Text/Grey Light`.
- Hover decoration: underlined.


## Navs component

### Shared nav rules
- Nav items use the same typography baseline as the UI system and are visually compact.
- Navigation should remain minimal and should not compete with the portfolio content.
- The component includes link, pills, and underline patterns.

### Variants
- Link.
- Pills.
- Underline.
- Link White.
- Underline White.

### States
- Default.
- Hover.
- Active.

### Variant specs

#### Link
- Default text color: `Semantic/Text/Black`.
- Hover text color: `Semantic/Text/Black`.
- Active text color: `Semantic/Text/Black`.
- Active state appears visually stronger through weight rather than fill.

#### Pills
- Default fill: `Semantic/Fill/Yellow`.
- Hover fill: `Semantic/Fill/Yellow Dark`.
- Active fill: `Semantic/Fill/Yellow`.
- Text color: `Semantic/Fill/Black`.
- Pill shape is compact and rounded.

#### Underline
- Default text color: `Semantic/Text/Black`.
- Default underline color: `Semantic/Stroke/Black`.
- Hover text color: `Semantic/Text/Black`.
- Hover underline color: `Semantic/Stroke/Black`.
- Active state can reuse the same underline treatment.

#### Link White
- Default text color: `Semantic/Text/White`.
- Hover text color: `Semantic/Text/White`.
- Active text color: `Semantic/Text/White`.

#### Underline White
- Default text color: `Semantic/Text/White`.
- Default underline color: `Semantic/Stroke/White`.
- Hover text color: `Semantic/Text/White`.
- Hover underline color: `Semantic/Stroke/White`.

### Notes
- In the screenshot, the active example is the link variant shown with stronger emphasis.
- The nav list includes labels such as `Home`, `Features`, and `Pricing` for demonstration.
- The hamburger icon represents a compact navigation trigger for smaller layouts.

## Implementation guidance for Antigravity
- Use this document as the visual source of truth for foundational tokens.
- Build components from semantic tokens, not from primitive colors.
- Preserve the editorial and product-design tone of the portfolio.
- Avoid adding new colors, shadows, radii, or type styles unless explicitly defined later.
- Keep the system minimal and consistent.

## Pending definitions
The following items should be confirmed in later iterations:
- Exact token mapping for hover states across all button variants.
- Additional components beyond buttons and navs.
- Border radius scale beyond the current 4px button usage.
- Responsive rules and layout grid.
- Dark mode behavior, if included in the portfolio.

## Components covered so far
- Color system.
- Typography.
- Spacing.
- Shadows.
- Buttons.
- Navs.


## Button group component

### Shared button group rules
- Each segment uses the same base visual language as the button system.
- The inactive state should appear as a light surface with a neutral border.
- The active or hovered segment uses the yellow fill token, not a raw white override.
- The user clarified that the segments that look white should be documented as `Semantic/Fill/White`, not as plain `#FFFFFF`.

### Variants
- Default.
- Hover Left.
- Hover Middle.
- Hover Right.

### State specs

#### Default
- All segments: `Semantic/Fill/White`.
- Border: neutral grey border consistent with the system.
- Text: dark, legible, and centered.

#### Hover Left
- Left segment fill: `Semantic/Fill/Yellow`.
- Middle segment fill: `Semantic/Fill/White`.
- Right segment fill: `Semantic/Fill/White`.

#### Hover Middle
- Middle segment fill: `Semantic/Fill/Yellow`.
- Left segment fill: `Semantic/Fill/White`.
- Right segment fill: `Semantic/Fill/White`.

#### Hover Right
- Right segment fill: `Semantic/Fill/Yellow`.
- Left segment fill: `Semantic/Fill/White`.
- Middle segment fill: `Semantic/Fill/White`.

### Notes
- Segment labels shown in the reference are `Left`, `Middle`, and `Right`.
- The component behaves like a segmented control or button group.
- Do not replace the intended `Fill/White` token with a literal white hex in the documentation.


## Form components

### Shared form rules
- Form fields use the same design language as the rest of the system.
- Labels are placed above the fields in the examples shown.
- Helper text uses a compact, muted treatment beneath the field. Placeholder text uses `Semantic/Text/Grey Light`.
- Error states use red styling for border and text.
- Focus / active states use a stronger neutral outline or emphasis.
- The reference image includes textarea, input, radio, and checkbox patterns. White surfaces in fields should use `Semantic/Fill/White`, not a raw `#FFFFFF` value.
- Text styles in the form references map as follows: `Label` means `Label Bold` for textarea and input, `Help text` means `Caption`, `Placeholder` and `Description example` mean `Body`, and `Label` in radio and checks uses `Body` size.

### Textarea

#### Structure
- Label.
- Field.
- Optional help text.

#### Variants observed
- Basic.
- Default.
- Hover.
- Active.
- Error.

#### Configuration states
- Help text true.
- Help text false.
- Scroller true.
- Scroller false.

#### Styling notes
- Default textarea uses `Semantic/Stroke/Grey Light` for the border and `Semantic/Fill/White` for the fill.
- Hover uses `Semantic/Stroke/Grey Light` for the border and keeps `Semantic/Fill/White` for the fill.
- Active uses `Semantic/Stroke/Grey Medium` for the border and keeps `Semantic/Fill/White` for the fill.
- Error uses a red border and red text treatment.
- The scroller presence is a variant concern, not a visual token change.

### Input

#### Structure
- Label.
- Input field.
- Optional help text.
- Optional right icon.

#### Variants observed
- Default.
- Error.
- Fill.
- Active.

#### Configuration states
- Help text true.
- Help text false.
- Right icon true.
- Right icon false.

#### Styling notes
- Default inputs use `Semantic/Stroke/Grey Light` for the border and `Semantic/Fill/White` for the fill.
- Error inputs use a red border and red text treatment.
- Fill appears as a filled state using a white-based fill token rather than a raw hex white.
- Active uses `Semantic/Stroke/Grey Medium` for the border and keeps the fill on `Semantic/Fill/White`.
- The right icon is subtle and aligned inside the field.

### Radio

#### Structure
- Radio circle.
- Optional label.

#### Variants observed
- Checked true.
- Checked false.
- Label true.
- Label false.

#### Styling notes
- Unchecked radio uses a neutral grey outline and `Semantic/Fill/White` for the circle fill.
- Checked radio uses `Semantic/Fill/Yellow` for the active state.
- When the label is present, it sits inline with the control.
- The radio is compact and visually minimal.

### Checks

#### Structure
- Checkbox square.
- Optional label.

#### Variants observed
- Default.
- Checked.
- Disabled.
- Show label true.
- Show label false.

#### Styling notes
- Default checkbox uses a neutral grey outline and `Semantic/Fill/White` for the box fill.
- Checked checkbox uses `Semantic/Fill/Yellow` and a visible check mark.
- Disabled checkbox uses a muted grey treatment.
- Labels appear inline when enabled.

### Notes
- The image shows additional state matrices, but the main implementation intent is clear.
- Keep form controls visually restrained so they do not fight the portfolio content.
- If needed, future iterations can split these into separate field components with focus, invalid, and disabled sub-states.

## Form typography mapping
- Textarea / Input label: `Label Bold`.
- Textarea / Input help text: `Caption`.
- Textarea / Input placeholder: `Body`.
- Textarea / Input description example: `Body`.
- Radio label: `Body`.
- Checkbox label: `Body`.

## Typography update
- Body, Label, and Caption use `Enriqueta`.
- Body line height: `28px`.
- Label line height: `24px`.
- Caption line height: `20px`.
- Letter spacing for all three: `0em`.
