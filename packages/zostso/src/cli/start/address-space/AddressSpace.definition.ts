/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { ICommandDefinition } from "@brightside/imperative";
import { TSO_PROFILE_OPTIONS } from "../../constants/ZosTso.constants";

export const AddressSpaceDefinition: ICommandDefinition = {
    name: "address-space",
    aliases: ["as"],
    description: "Start a TSO address space, from which " +
    "you will receive a token (a.k.a 'servelet-key') for further address space interaction " +
    "(e.g. termination).",
    type: "command",
    handler: __dirname + "/AddressSpace.handler",
    profile: {
        optional: ["zosmf", "tso"],
    },
    options: TSO_PROFILE_OPTIONS,
    examples: [
        {
            description: "Start TSO/E address space",
            options: ""
        },
        {
            description: "Start TSO/E address space, and receive response in JSON format",
            options: "--rfj"
        },
    ],
};
