(BB AI Image)

### BeagleBone AI

### System Reference Manual (SRM)

### THIS DOCUMENT

[![Creative Commons CC-BY-SA](cc-by-sa-88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/)

All derivative works are to be attributed to [Jason Kridner of BeagleBoard.org](https://beagleboard.org/about/jkridner).

Supply comments and errors via https://github.com/beagleboard/beaglebone-ai/issues.

All information in this document is subject to change without notice.

For an up to date version of this document refer to:

https://github.com/beagleboard/beaglebone-ai/wiki/System-Reference-Manual

## BeagleBone AI Design

## REGULATORY AND COMPLIANCE INFORMATION

## WARNINGS, RESTRICTIONS, AND DISCLAIMERS

## WARRANTY

# Table of Contents (insert here)


# 1.0 Introduction

Built on the proven BeagleBoard.org® open source Linux approach, BeagleBone® AI fills the gap between small SBCs and more powerful industrial computers. Based on the Texas Instruments AM5729, developers have access to the powerful SoC with the ease of BeagleBone® Black header and mechanical compatibility. BeagleBone® AI makes it easy to explore how artificial intelligence (AI) can be used in everyday life via TI C66x digital-signal-processor (DSP) cores and embedded-vision-engine (EVE) cores supported through an optimized TIDL machine learning OpenCL API with pre-installed tools. Focused on everyday automation in industrial, commercial and home applications.

# 2.0 Change History

### 2.1 Document Change History

### 2.2 Board changes

#### 2.2.1 Rev A0
Initial prototype revision. Not taken to production.

#### 2.2.2 Rev A1

Second round prototype.
* Fixed size of mounting holes.
* Added LED for WiFi status.
* Added microHDMI.
* Changed eMMC voltage from 3.3V to 1.8V to support HS200.
* Changed eMMC from 4GB to 16GB.
* Changed serial debug header from 6-pin 100mil pitch to 3-pin 1.5mm pitch.
* Switched expansion header from UART4 to UART5. The UART4 pins were used for the microHDMI.

#### 2.2.3 Rev A1a
Pilot run.
* Added pull-down resistor on serial debug header RX line.

#### 2.2.4 Rev A2
Proposed changes.
* Moved microSD card cage closer to microHDMI to fit cases better.
* Connected AM5729 ball AB10 to to P9.13 to provide a GPIO.
* HDMI hot-plug detection fixes planned (TBD). 


# 3.0 Connecting Up Your BeagleBone AI

### 3.1 What's In the Box

### 3.2 Main Connection Scenarios

### 3.3 Tethered to a PC

### 3.4 Standalone w/Display and Keyboard/Mouse


# 4.0 BeagleBone AI Overview

### 4.1 BeagleBone Compatibility (Do we want this?)

### 4.2 BeagleBone AI Features

### 4.3 Board Component Locations


# 5.0 BeagleBone AI High Level Specification

Block Diagram
Processor
DSP
EVEs
PRUs
Graphics Accelerator
Memory
Power
Connectivity

# 6.0 Detailed Hardware Design

# 7.0 Connectors

### 7.1 Expansion Connectors

The expansion interface on the board is comprised of two 46 pin connectors. All signals on the expansion headers are **3.3V unless otherwise indicated.

**NOTE: Do not connect 5V logic level signals to these pins or the board will be damaged.

**NOTE: DO NOT APPLY VOLTAGE TO ANY I/O PIN WHEN POWER IS NOT SUPPLIED TO THE BOARD. IT WILL DAMAGE THE PROCESSOR AND VOID THE WARRANTY.**

**NO PINS ARE TO BE DRIVEN UNTIL AFTER THE SYS_RESET LINE GOES HIGH.**

**Figure ?** shows the location of the expansion connectors.

Insert Figure Here

The location and spacing of the expansion headers are the same as on the BeagleBone Black.

#### 7.1.1 Connector P8

**Table ?** shows the pinout of the **P8** expansion header. Other signals can be connected to this connector based on setting the pin mux on the processor, but this is the default settings on power up. The SW is responsible for setting the default function of each pin. There are some signals that have not been listed here. Refer to the processor documentation for more information on these pins and detailed descriptions of all of the pins listed. In some cases there may not be enough signals to complete a group of signals that may be required to implement a total interface.

The **PROC** column is the pin number on the processor.

The **PIN** column is the pin number on the expansion header.

The **MODE** columns are the mode setting for each pin. Setting each mode to align with the mode column will give that function on that pin.

**NOTE: DO NOT APPLY VOLTAGE TO ANY I/O PIN WHEN POWER IS NOT SUPPLIED TO THE BOARD. IT WILL DAMAGE THE PROCESSOR AND VOID THE WARRANTY.**

**NO PINS ARE TO BE DRIVEN UNTIL AFTER THE SYS_RESET LINE GOES HIGH.**

**Table ?. Expansion Header P8 Pinout**

| PIN | PROC | NAME | MODE0 | MODE1 | MODE2 | MODE3 | MODE4 | MODE5 | MODE6 | MODE7 | MODE8 | MODE9 | MODE10 | MODE11 | MODE12 | MODE13 | MODE14 |
| --- | ---- | ---- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ------ |    ------ | ------ | ------ | ------ |
|1 | | GND | | | | | | | | | | | | | | | |
|2 | | GND | | | | | | | | | | | | | | | |
|3 |AB8 |AB8_MMC3_DATA6 |mmc3_dat6 |spi4_d0 |uart10_ctsn | |vin2b_de1 | | | | |vin5a_hsync0 |ehrpwm3_tripzone_input |pr2_mii1_rxd1 |pr2_pru0_gpi10 |pr2_pru0_gpo10 |gpio1_24|
|4 |AB5 |AB5_MMC3_DATA7 |mmc3_dat7 |spi4_cs0 |uart10_rtsn | |vin2b_clk1 | | | | |vin5a_vsync0 |eCAP3_in_PWM3_out |pr2_mii1_rxd0 |pr2_pru0_gpi11 |pr2_pru0_gpo11 |gpio1_25 |
|5| AC9| AC9_MMC3_DATA2| mmc3_dat2| spi3_cs0| uart5_ctsn| | vin2b_d3| | | | | vin5a_d3| eQEP3_index| pr2_mii_mr1_clk| pr2_pru0_gpi6| pr2_pru0_gpo6| gpio7_1|
|6| AC3| AC3_MMC3_DATA3| mmc3_dat3| spi3_cs1| uart5_rtsn| | vin2b_d2| | | | | vin5a_d2| eQEP3_strobe| pr2_mii1_rxdv| pr2_pru0_gpi7| pr2_pru0_gpo7| gpio7_2|
|7| G14| G14_TIMER11| mcasp1_axr14| mcasp7_aclkx| mcasp7_aclkr| | | | | vin6a_d9| | | timer11| pr2_mii0_rxdv| pr2_pru1_gpi16| pr2_pru1_gpo16| gpio6_5|
|8| F14| F14_TIMER12| mcasp1_axr15| mcasp7_fsx| mcasp7_fsr| | | | | vin6a_d8| | | timer12| pr2_mii0_rxd3| pr2_pru0_gpi20| pr2_pru0_gpo20| gpio6_6|
|9| E17| E17_TIMER14| xref_clk1| mcasp2_axr9| mcasp1_axr5| mcasp2_ahclkx| mcasp6_ahclkx| | | vin6a_clk0| | | timer14| pr2_mii1_crs| pr2_pru1_gpi6| pr2_pru1_gpo6| gpio6_18|
|10| A13| A13_TIMER10| mcasp1_axr13| mcasp7_axr1| | | | | | vin6a_d10| | | timer10| pr2_mii_mr0_clk| pr2_pru1_gpi15| pr2_pru1_gpo15| gpio6_4|
|11| AH4| AH4_GPIO3_11| vin1a_d7| | | vout3_d0| vout3_d16| | | | | | eQEP2B_in| | pr1_pru0_gpi4| pr1_pru0_gpo4| gpio3_11|
|12| AG6| AG6_GPIO3_10| vin1a_d6| | | vout3_d1| vout3_d17| | | | | | eQEP2A_in| | pr1_pru0_gpi3| pr1_pru0_gpo3| gpio3_10|
|13| D3| D3_EHRPWM2B| vin2a_d10| | | mdio_mclk| vout2_d13| | | | | kbd_col7| ehrpwm2B| pr1_mdio_mdclk| pr1_pru1_gpi7| pr1_pru1_gpo7| gpio4_11|
|14| D5| D5_GPIO4_13| vin2a_d12| | | rgmii1_txc| vout2_d11| | | | mii1_rxclk| kbd_col8| eCAP2_in_PWM2_out| pr1_mii1_txd1| pr1_pru1_gpi9| pr1_pru1_gpo9| gpio4_13|
|15| D1| GPIO4_3| vin2a_d2| | | | vout2_d21| emu12| | | uart10_rxd| kbd_row6| eCAP1_in_PWM1_out| pr1_ecap0_ecap_capin_apwm_o| pr1_edio_data_in7| pr1_edio_data_out7| gpio4_3|
| | A3| | vin2a_d19| | vin2b_d4| rgmii1_rxctl| vout2_d4| | vin3a_d11| | mii1_txer| | ehrpwm3_tripzone_input| pr1_mii1_rxd0| pr1_pru1_gpi16| pr1_pru1_gpo16| gpio4_27|
|16| B4| B4_GPIO4_29| vin2a_d21| | vin2b_d2| rgmii1_rxd2| vout2_d2| vin3a_fld0| vin3a_d13| | mii1_col| | | pr1_mii1_rxlink| pr1_pru1_gpi18| pr1_pru1_gpo18| gpio4_29|
|17| A7| A7_GPIO8_18| vout1_d18| | emu4| vin4a_d2| vin3a_d2| obs11| obs27| | | | pr2_edio_data_in2| pr2_edio_data_out2| pr2_pru0_gpi15| pr2_pru0_gpo15| gpio8_18|
|18| F5| F5_GPIO4_9| vin2a_d8| | | | vout2_d15| emu18| | | mii1_rxd3| kbd_col5| eQEP2_strobe| pr1_mii1_txd3| pr1_pru1_gpi5| pr1_pru1_gpo5| gpio4_9|
|19| E6| E6_EHRPWM2A| vin2a_d9| | | | vout2_d14| emu19| | | mii1_rxd0| kbd_col6| ehrpwm2A| pr1_mii1_txd2| pr1_pru1_gpi6| pr1_pru1_gpo6| gpio4_10|
|20| AC4| AC4_MMC3_CMD| mmc3_cmd| spi3_sclk| | | vin2b_d6| | | | | vin5a_d6| eCAP2_in_PWM2_out| pr2_mii1_txd2| pr2_pru0_gpi3| pr2_pru0_gpo3| gpio6_30|
|21| AD4| AD4_MMC3_CLK| mmc3_clk| | | | vin2b_d7| | | | | vin5a_d7| ehrpwm2_tripzone_input| pr2_mii1_txd3| pr2_pru0_gpi2| pr2_pru0_gpo2| gpio6_29|
|22| AD6| AD6_MMC3_DATA5| mmc3_dat5| spi4_d1| uart10_txd| | vin2b_d0| | | | | vin5a_d0| ehrpwm3B| pr2_mii1_rxd2| pr2_pru0_gpi9| pr2_pru0_gpo9| gpio1_23|
|23| AC8| AC8_MMC3_DATA4| mmc3_dat4| spi4_sclk| uart10_rxd| | vin2b_d1| | | | | vin5a_d1| ehrpwm3A| pr2_mii1_rxd3| pr2_pru0_gpi8| pr2_pru0_gpo8| gpio1_22|
|24| AC6| AC6_MMC3_DATA1| mmc3_dat1| spi3_d0| uart5_txd| | vin2b_d4| | | | | vin5a_d4| eQEP3B_in| pr2_mii1_txd0| pr2_pru0_gpi5| pr2_pru0_gpo5| gpio7_0|
|25| AC7| AC7_MMC3_DATA0| mmc3_dat0| spi3_d1| uart5_rxd| | vin2b_d5| | | | | vin5a_d5| eQEP3A_in| pr2_mii1_txd1| pr2_pru0_gpi4| pr2_pru0_gpo4| gpio6_31|
|26| B3| B3_GPIO4_28| vin2a_d20| | vin2b_d3| rgmii1_rxd3| vout2_d3| vin3a_de0| vin3a_d12| | mii1_rxer| | eCAP3_in_PWM3_out| pr1_mii1_rxer| pr1_pru1_gpi17| pr1_pru1_gpo17| gpio4_28|
|27| E11| LCD_VSYNC| vout1_vsync| | | vin4a_vsync0| vin3a_vsync0| | | | spi3_sclk| | | | pr2_pru1_gpi17| pr2_pru1_gpo17| gpio4_23|
| | A8| | vout1_d19| | emu15| vin4a_d3| vin3a_d3| obs12| obs28| | | | pr2_edio_data_in3| pr2_edio_data_out3| pr2_pru0_gpi16| pr2_pru0_gpo16| gpio8_19|
|28| D11| LCD_CLK| vout1_clk| | | vin4a_fld0| vin3a_fld0| | | | spi3_cs0| | | | | | gpio4_19|
| | C9| | vout1_d20| | emu16| vin4a_d4| vin3a_d4| obs13| obs29| | | | pr2_edio_data_in4| pr2_edio_data_out4| pr2_pru0_gpi17| pr2_pru0_gpo17| gpio8_20|
|29| C11| LCD_HSYNC| vout1_hsync| | | vin4a_hsync0| vin3a_hsync0| | | | spi3_d0| | | | | | gpio4_22|
| | A9| | vout1_d21| | emu17| vin4a_d5| vin3a_d5| obs14| obs30| | | | pr2_edio_data_in5| pr2_edio_data_out5| pr2_pru0_gpi18| pr2_pru0_gpo18| gpio8_21|
|30| B10| LCD_DE| vout1_de| | | vin4a_de0| vin3a_de0| | | | spi3_d1| | | | | | gpio4_20|
| | B9| | vout1_d22| | emu18| vin4a_d6| vin3a_d6| obs15| obs31| | | | pr2_edio_data_in6| pr2_edio_data_out6| pr2_pru0_gpi19| pr2_pru0_gpo19| gpio8_22|
|31| C8| LCD_DATA14| vout1_d14| | emu13| vin4a_d14| vin3a_d14| obs9| obs25| | | | pr2_uart0_txd| | pr2_pru0_gpi11| pr2_pru0_gpo11| gpio8_14|
| | G16| | mcasp4_axr0| | spi3_d0| uart8_ctsn| uart4_rxd| | vout2_d18| | vin4a_d18| vin5a_d13| | | | | |
|32| C7| LCD_DATA15| vout1_d15| | emu14| vin4a_d15| vin3a_d15| obs10| obs26| | | | pr2_ecap0_ecap_capin_apwm_o| | pr2_pru0_gpi12| pr2_pru0_gpo12| gpio8_15|
| | D17| | mcasp4_axr1| | spi3_cs0| uart8_rtsn| uart4_txd| | vout2_d19| | vin4a_d19| vin5a_d12| | | pr2_pru1_gpi0| pr2_pru1_gpo0| |
|33| C6| LCD_DATA13| vout1_d13| | emu12| vin4a_d13| vin3a_d13| obs8| obs24| | | | pr2_uart0_rxd| | pr2_pru0_gpi10| pr2_pru0_gpo10| gpio8_13|
| | AF9| | vin1a_fld0| vin1b_vsync1| | | vout3_clk| uart7_txd| | timer15| spi3_d1| kbd_row1| eQEP1B_in| | | | gpio3_1|
|34| D8| LCD_DATA11| vout1_d11| | emu10| vin4a_d11| vin3a_d11| obs6| obs22| obs_dmarq2| | | pr2_uart0_cts_n| | pr2_pru0_gpi8| pr2_pru0_gpo8| gpio8_11|
| | G6| | vin2a_vsync0| | | vin2b_vsync1| vout2_vsync| emu9| | uart9_txd| spi4_d1| kbd_row3| ehrpwm1A| pr1_uart0_rts_n| pr1_edio_data_in4| pr1_edio_data_out4| gpio4_0|
|35| A5| LCD_DATA12| vout1_d12| | emu11| vin4a_d12| vin3a_d12| obs7| obs23| | | | pr2_uart0_rts_n| | pr2_pru0_gpi9| pr2_pru0_gpo9| gpio8_12|
| | AD9| | vin1a_de0| vin1b_hsync1| | vout3_d17| vout3_de| uart7_rxd| | timer16| spi3_sclk| kbd_row0| eQEP1A_in| | | | gpio3_0|
|36| D7| LCD_DATA10| vout1_d10| | emu3| vin4a_d10| vin3a_d10| obs5| obs21| obs_irq2| | | pr2_edio_sof| | pr2_pru0_gpi7| pr2_pru0_gpo7| gpio8_10|
| | F2| | vin2a_d0| | | | vout2_d23| emu10| | uart9_ctsn| spi4_d0| kbd_row4| ehrpwm1B| pr1_uart0_rxd| pr1_edio_data_in5| pr1_edio_data_out5| gpio4_1|
|37| E8| LCD_DATA8| vout1_d8| | uart6_rxd| vin4a_d8| vin3a_d8| | | | | | pr2_edc_sync1_out| | pr2_pru0_gpi5| pr2_pru0_gpo5| gpio8_8|
| | A21| | mcasp4_fsx| mcasp4_fsr| spi3_d1| uart8_txd| i2c4_scl| | vout2_d17| | vin4a_d17| vin5a_d14| | | | | |
|38| D9| LCD_DATA9| vout1_d9| | uart6_txd| vin4a_d9| vin3a_d9| | | | | | pr2_edio_latch_in| | pr2_pru0_gpi6| pr2_pru0_gpo6| gpio8_9|
| | C18| | mcasp4_aclkx| mcasp4_aclkr| spi3_sclk| uart8_rxd| i2c4_sda| | vout2_d16| | vin4a_d16| vin5a_d15| | | | | |
|39| F8| F8_LCD_DATA6| vout1_d6| | emu8| vin4a_d22| vin3a_d22| obs4| obs20| | | | pr2_edc_latch1_in| | pr2_pru0_gpi3| pr2_pru0_gpo3| gpio8_6|
|40| E7| E7_LCD_DATA7| vout1_d7| | emu9| vin4a_d23| vin3a_d23| | | | | | pr2_edc_sync0_out| | pr2_pru0_gpi4| pr2_pru0_gpo4| gpio8_7|
|41| E9| E9_LCD_DATA4| vout1_d4| | emu6| vin4a_d20| vin3a_d20| obs2| obs18| | | | pr1_ecap0_ecap_capin_apwm_o| | pr2_pru0_gpi1| pr2_pru0_gpo1| gpio8_4|
|42| F9| F9_LCD_DATA5| vout1_d5| | emu7| vin4a_d21| vin3a_d21| obs3| obs19| | | | pr2_edc_latch0_in| | pr2_pru0_gpi2| pr2_pru0_gpo2| gpio8_5|
|43| F10| F10_LCD_DATA2| vout1_d2| | emu2| vin4a_d18| vin3a_d18| obs0| obs16| obs_irq1| | | pr1_uart0_rxd| | pr2_pru1_gpi20| pr2_pru1_gpo20| gpio8_2|
|44| G11| G11_LCD_DATA3| vout1_d3| | emu5| vin4a_d19| vin3a_d19| obs1| obs17| obs_dmarq1| | | pr1_uart0_txd| | pr2_pru0_gpi0| pr2_pru0_gpo0| gpio8_3|
|45| F11| LCD_DATA0| vout1_d0| | uart5_rxd| vin4a_d16| vin3a_d16| | | | spi3_cs2| | pr1_uart0_cts_n| | pr2_pru1_gpi18| pr2_pru1_gpo18| gpio8_0|
| | B7| | vout1_d16| | uart7_rxd| vin4a_d0| vin3a_d0| | | | | | pr2_edio_data_in0| pr2_edio_data_out0| pr2_pru0_gpi13| pr2_pru0_gpo13| gpio8_16|
|46| G10| LCD_DATA1| vout1_d1| | uart5_txd| vin4a_d17| vin3a_d17| | | | | | pr1_uart0_rts_n| | pr2_pru1_gpi19| pr2_pru1_gpo19| gpio8_1|
| | A10| | vout1_d23| | emu19| vin4a_d7| vin3a_d7| | | | spi3_cs3| | pr2_edio_data_in7| pr2_edio_data_out7| pr2_pru0_gpi20| pr2_pru0_gpo20| gpio8_23|

Notes regarding the resistors on muxed pins.

#### 7.1.2 Connector P9

# 8.0 Cape Board Support

# 9.0 BeagleBone AI Mechanical

# 10.0 Pictures

BeagleBone AI Back of Board Image

![beaglebone ai back of board](images/BB_AI_Back.jpg)

# 11.0 Support Information
