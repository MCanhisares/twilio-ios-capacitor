//
//  Utils.swift
//  Plugin
//
//  Created by Marcel Canhisares on 2019-01-23.
//  Copyright © 2019 Max Lynch. All rights reserved.
//

import Foundation

struct Utils {
    static let isSimulator: Bool = {
        var isSim = false
        #if arch(i386) || arch(x86_64)
            isSim = true
        #endif
        return isSim
    }()
}
