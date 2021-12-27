# Restructuring project to DDD patern

* ## **src.**
    - ### **User/**
        - __index.jsx__
        - __Route.js__
        - __style.jsx__
        - __Components/__
            - __Information.Componet.jsx__
    - ### **Activities/**
        - __index.jsx__
        - __Routes.js__
        - __Style.jsx__
        - __Components/__
            - __ActivityHeader.component.jsx__
            - __ActivityItem.component.jsx__
            - __ActivityList.component.jsx__
            - __QuickButton.component.jsx__
            - __QuickButtonContainer.component.jsx__
    - ### **Wallet/**
        - __index.jsx__
        - __Routes.js__
        - __Style.jsx__
        - __Components/__
            - __Balance.component.jsx__
    - ### **Settings/**
        - __index.jsx__
        - __Routes.js__
        - __Style.jsx__
        - __Compoenents/__
    - ### **Shareds**
        - __Config/__
            - __index.js__
        - __Styles/__
            - __index.jsx__
        - __store/__
            - __index.jsx__

Comands to create the structure.
                                                                     
    mkdir -p ./Users/Components/ ./Activities/Components/ ./Wallet/Components/ ./Configurantion/Components/ ./Shareds/Configs/ ./Shareds/Styles/ ./Shareds/store/ && touch ./Users/index.jsx ./Users/Routes.jsx ./Users/Style.jsx ./Users/Components/Information.component.jsx ./Activities/index.jsx ./Activities/Routes.jsx ./Activities/Style.jsx ./Activities/Components/ActivityHeader.component.jsx ./Wallet/index.jsx ./Wallet/Routes.jsx ./Wallet/Style.jsx ./Wallet/Components/ActivityHeader.component.jsx ./Configurantion/index.jsx ./Configurantion/Routes.jsx ./Configurantion/Style.jsx ./Configurantion/Components/ActivityHeader.component.jsx ./Shareds/Configs/index.jsx ./Shareds/Styles/index.jsx ./Shareds/store/index.jsx